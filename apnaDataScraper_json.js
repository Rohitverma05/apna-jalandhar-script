import fs from "fs";
import fetch from "node-fetch";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Path to the main file
const mainFilePath = "apnaOutput/mainFile.json";

// Function to fetch and process data
const fetchData = async (href, tagName, page, outputDir) => {
  try {
    const modUrl = `${href}page/${page}/`;

    const headers = {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      cookie:
        "sc_is_visitor_unique=rx12323405.1737315445.572AB902881B45BEAEF2F8CFF0DE159F.1.1.1.1.1.1.1.1.1",
      dnt: "1",
      "if-none-match": '"2200054-1736852609;br"',
      priority: "u=0, i",
      referer: "https://www.apnajalandhar.com/",
      "sec-ch-ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    };

    const response = await fetch(modUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();

    const regex =
      /<h3><a .*?>(.*?)<\/a><\/h3>.*?<p class="address"><b>Address<\/b>: (.*?)<\/p>.*?<p class="phone"><b>Phone<\/b>: <a .*?>(.*?)<\/a><\/p>.*?<p><strong>Tags:<\/strong>.*?>(.*?)<\/a>/gs;

    const matches = [...data.matchAll(regex)].map((match) => ({
      name: match[1].trim(),
      address: match[2].trim(),
      phone: match[3].trim(),
      tags: match[4].trim(),
    }));

    const outputPath = `${outputDir}/page_${page}.json`;
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(matches, null, 2), "utf-8");
    console.log(`Page ${page} for ${tagName} saved successfully.`);
  } catch (error) {
    console.error(`Error fetching page ${page} for ${tagName}`, error);
  }
};

(async () => {
  try {
    // Read the main file content
    const data = fs.readFileSync(mainFilePath, "utf-8");
    const categories = JSON.parse(data);

    for (const category of categories) {
      const { href, name: tagName, totalPage } = category;

      const outputDir = `output/${tagName.replace(/[/\\?%*:|"<>]/g, "_")}`; // Sanitize folder name
      console.log(`Processing category: ${tagName}, Pages: ${totalPage}`);

      for (let page = 1; page <= totalPage; page++) {
        await fetchData(href, tagName, page, outputDir);
        await delay(2000); // Add a delay to avoid overloading the server
      }
    }

    console.log("Processing complete.");
  } catch (error) {
    console.error("Error processing main file:", error.message);
  }
})();
