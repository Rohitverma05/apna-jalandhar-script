import fs from "fs";

const htmlString = ` <div id="category">
            <div class="container-fluid">
                <div class="col-md-9">
                    <h2>Popular Categories</h2>
                    <ul>
                        <li>
                            <a href="https://www.apnajalandhar.com/3d-key-chain-dealers/">3D Key Chain Dealers</a>
                            <span>388</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ac-dealers/">AC Dealers</a>
                            <span>837</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ac-repair-services/">AC Repair &amp;Services</a>
                            <span>291</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/atms/">ATMs</a>
                            <span>598</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/advertising-agencies/">Advertising Agencies</a>
                            <span>399</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/air-ticketing-agents/">Air Ticketing Agents</a>
                            <span>582</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/architects/">Architects</a>
                            <span>459</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/astrologers/">Astrologers</a>
                            <span>457</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/auditors/">Auditors</a>
                            <span>111</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/automobile-part-dealers/">Automobile Part Dealers</a>
                            <span>576</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ayurvedic-doctors/">Ayurvedic Doctors</a>
                            <span>242</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ayurvedic-medicine-shops/">Ayurvedic Medicine Shops</a>
                            <span>307</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bag-dealers/">Bag Dealers</a>
                            <span>159</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bakeries/">Bakeries</a>
                            <span>400</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bakery-product-retailers/">Bakery Product Retailers</a>
                            <span>439</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bands/">Bands</a>
                            <span>141</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/banks/">Banks</a>
                            <span>803</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/banquet-halls/">Banquet Halls</a>
                            <span>155</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bathroom-fittings-dealers/">Bathroom Fittings Dealers</a>
                            <span>276</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/battery-dealers/">Battery Dealers</a>
                            <span>413</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/beauty-parlours/">Beauty Parlours</a>
                            <span>965</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bed-dealers/">Bed Dealers</a>
                            <span>542</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bib-cock-manufacturers/">Bib Cock Manufacturers</a>
                            <span>112</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/bicycle-dealers/">Bicycle Dealers</a>
                            <span>106</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/blood-testing-centres/">Blood Testing Centres</a>
                            <span>150</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/blower-manufacturers/">Blower Manufacturers</a>
                            <span>129</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/book-publishers/">Book Publishers</a>
                            <span>146</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/book-shops/">Book Shops</a>
                            <span>346</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/boutiques/">Boutiques</a>
                            <span>735</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/box-manufacturers/">Box Manufacturers</a>
                            <span>174</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/builders-developers/">Builders &amp;Developers</a>
                            <span>731</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/building-material-dealers/">Building Material Dealers</a>
                            <span>306</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/business-consultants/">Business Consultants</a>
                            <span>124</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cctv-dealers/">CCTV Dealers</a>
                            <span>295</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-accessory-dealers/">Car Accessory Dealers</a>
                            <span>226</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-dealers/">Car Dealers</a>
                            <span>153</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-hire/">Car Hire</a>
                            <span>446</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-rental/">Car Rental</a>
                            <span>125</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-repair-services/">Car Repair &amp;Services</a>
                            <span>478</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-tyre-dealers/">Car Tyre Dealers</a>
                            <span>101</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/car-washing-services/">Car Washing Services</a>
                            <span>130</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/carpenters/">Carpenters</a>
                            <span>110</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/carrom-board-dealers/">Carrom Board Dealers</a>
                            <span>257</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cast-iron-manufacturers/">Cast Iron Manufacturers</a>
                            <span>165</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/caterers/">Caterers</a>
                            <span>503</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cement-dealers/">Cement Dealers</a>
                            <span>349</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/chemical-dealers/">Chemical Dealers</a>
                            <span>220</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/chemists/">Chemists</a>
                            <span>639</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/chicken-retailers/">Chicken Retailers</a>
                            <span>134</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/children-readymade-garment-retailers/">Children Readymade Garment Retailers</a>
                            <span>167</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/civil-lawyers/">Civil Lawyers</a>
                            <span>375</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cleaning-services/">Cleaning Services</a>
                            <span>121</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/clinics/">Clinics</a>
                            <span>531</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cloth-retailers/">Cloth Retailers</a>
                            <span>116</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cock-dealers/">Cock Dealers</a>
                            <span>371</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/colleges/">Colleges</a>
                            <span>168</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/computer-dealers/">Computer Dealers</a>
                            <span>559</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/computer-graphic-designers/">Computer Graphic Designers</a>
                            <span>115</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/computer-printer-repair-services/">Computer Printer Repair &amp;Services</a>
                            <span>101</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/computer-repair-services/">Computer Repair &amp;Services</a>
                            <span>456</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/computer-training-institutes/">Computer Training Institutes</a>
                            <span>428</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/construction-companies-contractors/">Construction Companies &amp;Contractors</a>
                            <span>210</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/contact-lens-dealers/">Contact Lens Dealers</a>
                            <span>146</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/corporate-companies/">Corporate Companies</a>
                            <span>146</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cosmetic-dealers/">Cosmetic Dealers</a>
                            <span>436</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/courier-services/">Courier Services</a>
                            <span>384</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cricket-ball-dealers/">Cricket Ball Dealers</a>
                            <span>108</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cricket-bat-dealers/">Cricket Bat Dealers</a>
                            <span>587</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/crockery-dealers/">Crockery Dealers</a>
                            <span>105</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/cyber-cafes/">Cyber Cafes</a>
                            <span>218</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dj-equipments-on-hire/">DJ Equipments On Hire</a>
                            <span>115</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dairy-product-retailers/">Dairy Product Retailers</a>
                            <span>253</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dal-retailers/">Dal Retailers</a>
                            <span>416</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/decorators/">Decorators</a>
                            <span>165</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dental-surgeons/">Dental Surgeons</a>
                            <span>187</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dentists/">Dentists</a>
                            <span>578</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/departmental-stores/">Departmental Stores</a>
                            <span>324</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dhaba-restaurants/">Dhaba Restaurants</a>
                            <span>139</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/diagnostic-centres/">Diagnostic Centres</a>
                            <span>113</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dining-table-dealers/">Dining Table Dealers</a>
                            <span>523</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/disc-jockey/">Disc Jockey</a>
                            <span>169</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/dry-cleaners/">Dry Cleaners</a>
                            <span>337</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ent-doctors/">ENT Doctors</a>
                            <span>359</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/education-consultants/">Education Consultants</a>
                            <span>373</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/electrical-goods-repair-services/">Electrical Goods Repair &amp;Services</a>
                            <span>152</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/electrical-shops/">Electrical Shops</a>
                            <span>878</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/electricians/">Electricians</a>
                            <span>224</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/electronic-good-repair-services/">Electronic Good Repair &amp;Services</a>
                            <span>1553</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/english-medium-schools/">English Medium Schools</a>
                            <span>108</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/estate-agents/">Estate Agents</a>
                            <span>1008</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/event-organisers/">Event Organisers</a>
                            <span>368</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fabric-retailers/">Fabric Retailers</a>
                            <span>223</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fabricators/">Fabricators</a>
                            <span>556</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fan-dealers/">Fan Dealers</a>
                            <span>125</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fast-food/">Fast Food</a>
                            <span>823</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fast-food-delivery-services/">Fast Food Delivery Services</a>
                            <span>140</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fertilizer-dealers/">Fertilizer Dealers</a>
                            <span>431</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/film-production-houses/">Film Production Houses</a>
                            <span>132</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/finance-companies/">Finance Companies</a>
                            <span>249</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/finance-consultants/">Finance Consultants</a>
                            <span>167</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/florists/">Florists</a>
                            <span>102</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/flour-mills/">Flour Mills</a>
                            <span>136</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/football-manufacturers/">Football Manufacturers</a>
                            <span>147</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/foreign-exchange-agents/">Foreign Exchange Agents</a>
                            <span>194</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/fruit-vendors/">Fruit Vendors</a>
                            <span>126</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/furniture-dealers/">Furniture Dealers</a>
                            <span>739</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/furniture-manufacturers/">Furniture Manufacturers</a>
                            <span>129</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gst-registration-consultants/">GST Registration Consultants</a>
                            <span>129</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/garages/">Garages</a>
                            <span>322</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/general-physician-doctors/">General Physician Doctors</a>
                            <span>582</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/general-stores/">General Stores</a>
                            <span>917</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gents-tailors/">Gents Tailors</a>
                            <span>268</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gift-shops/">Gift Shops</a>
                            <span>499</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/glass-dealers/">Glass Dealers</a>
                            <span>239</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gold-jewellery-showrooms/">Gold Jewellery Showrooms</a>
                            <span>517</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/guest-house/">Guest House</a>
                            <span>203</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gulab-jamun-retailers/">Gulab Jamun Retailers</a>
                            <span>327</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gym-fitness-equipment-dealers/">Gym &amp;Fitness Equipment Dealers</a>
                            <span>253</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gyms-fitness-centres/">Gyms &amp;Fitness Centres</a>
                            <span>333</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/gynaecologist-obstetrician-doctors/">Gynaecologist &amp;Obstetrician Doctors</a>
                            <span>242</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hair-stylists/">Hair Stylists</a>
                            <span>244</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hand-tool-dealers/">Hand Tool Dealers</a>
                            <span>757</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hand-tool-manufacturers/">Hand Tool Manufacturers</a>
                            <span>272</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/handloom-retailers/">Handloom Retailers</a>
                            <span>127</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hardware-dealers/">Hardware Dealers</a>
                            <span>101</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/home-appliance-dealers/">Home Appliance Dealers</a>
                            <span>237</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/home-delivery-restaurants/">Home Delivery Restaurants</a>
                            <span>273</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hospitals/">Hospitals</a>
                            <span>583</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/hotels/">Hotels</a>
                            <span>367</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ielts-tutorials/">IELTS Tutorials</a>
                            <span>424</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ice-cream-parlours-retailers/">Ice Cream Parlours &amp;Retailers</a>
                            <span>205</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/immigration-consultants/">Immigration Consultants</a>
                            <span>602</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/institutes/">Institutes</a>
                            <span>128</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/insurance-agents/">Insurance Agents</a>
                            <span>791</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/insurance-companies/">Insurance Companies</a>
                            <span>191</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/interior-decorators/">Interior Decorators</a>
                            <span>254</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/interior-designers/">Interior Designers</a>
                            <span>282</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/internet-service-providers/">Internet Service Providers</a>
                            <span>153</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/inverter-dealers/">Inverter Dealers</a>
                            <span>193</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/iron-dealers/">Iron Dealers</a>
                            <span>161</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/jeans-retailers/">Jeans Retailers</a>
                            <span>137</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/jewellery-showrooms/">Jewellery Showrooms</a>
                            <span>773</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/juice-centres/">Juice Centres</a>
                            <span>147</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/kindergartens/">Kindergartens</a>
                            <span>122</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/language-classes-for-english/">Language Classes For English</a>
                            <span>219</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/laptop-dealers/">Laptop Dealers</a>
                            <span>116</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/laptop-repair-services/">Laptop Repair &amp;Services</a>
                            <span>201</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/laser-dentists/">Laser Dentists</a>
                            <span>132</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/lawyers/">Lawyers</a>
                            <span>739</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/lawyers-for-criminal-case/">Lawyers For Criminal Case</a>
                            <span>144</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/loans/">Loans</a>
                            <span>356</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/lubricant-dealers/">Lubricant Dealers</a>
                            <span>113</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/marble-dealers/">Marble Dealers</a>
                            <span>202</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/marketing-agencies/">Marketing Agencies</a>
                            <span>109</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/matrimonial-bureaus/">Matrimonial Bureaus</a>
                            <span>104</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/medicine-distributors/">Medicine Distributors</a>
                            <span>182</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/men-readymade-garment-retailers/">Men Readymade Garment Retailers</a>
                            <span>641</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/mobile-phone-accessory-dealers/">Mobile Phone Accessory Dealers</a>
                            <span>531</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/mobile-phone-dealers/">Mobile Phone Dealers</a>
                            <span>1625</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/mobile-phone-recharge-coupon-dealers/">Mobile Phone Recharge Coupon Dealers</a>
                            <span>152</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/mobile-phone-repair-services/">Mobile Phone Repair &amp;Services</a>
                            <span>1221</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/money-transfer-agencies/">Money Transfer Agencies</a>
                            <span>437</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/motorcycle-dealers/">Motorcycle Dealers</a>
                            <span>145</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/motorcycle-repair-services/">Motorcycle Repair &amp;Services</a>
                            <span>415</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/motorcycle-spare-part-dealers/">Motorcycle Spare Part Dealers</a>
                            <span>124</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/mutual-fund-agents/">Mutual Fund Agents</a>
                            <span>159</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/nationalised-banks/">Nationalised Banks</a>
                            <span>346</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/north-indian-restaurants/">North Indian Restaurants</a>
                            <span>120</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/notebook-dealers/">Notebook Dealers</a>
                            <span>413</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/nut-bolt-manufacturers/">Nut Bolt Manufacturers</a>
                            <span>124</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/nutritional-supplement-retailers/">Nutritional Supplement Retailers</a>
                            <span>171</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/opticians/">Opticians</a>
                            <span>284</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/overseas-education-consultants/">Overseas Education Consultants</a>
                            <span>155</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pvc-dealers/">PVC Dealers</a>
                            <span>119</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/packers-movers/">Packers &amp;Movers</a>
                            <span>120</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/paint-dealers/">Paint Dealers</a>
                            <span>399</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pathology-labs/">Pathology Labs</a>
                            <span>220</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/paying-guest-accommodations/">Paying Guest Accommodations</a>
                            <span>151</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pen-dealers/">Pen Dealers</a>
                            <span>480</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pesticide-dealers/">Pesticide Dealers</a>
                            <span>122</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/petrol-pumps/">Petrol Pumps</a>
                            <span>103</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/photo-studios-photographers/">Photo Studios &amp;Photographers</a>
                            <span>1038</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pickle-retailers/">Pickle Retailers</a>
                            <span>252</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pipe-dealers/">Pipe Dealers</a>
                            <span>675</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/pipe-fitting-manufacturers/">Pipe Fitting Manufacturers</a>
                            <span>160</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/placement-services/">Placement Services</a>
                            <span>297</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/plastic-product-dealers/">Plastic Product Dealers</a>
                            <span>102</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/plier-manufacturers/">Plier Manufacturers</a>
                            <span>137</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/plywood-dealers/">Plywood Dealers</a>
                            <span>193</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/printing-services/">Printing Services</a>
                            <span>938</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/private-hospitals/">Private Hospitals</a>
                            <span>103</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/private-sector-banks/">Private Sector Banks</a>
                            <span>121</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/property-consultants/">Property Consultants</a>
                            <span>192</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/provision-stores/">Provision Stores</a>
                            <span>174</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/ro-water-purifier-dealers/">RO Water Purifier Dealers</a>
                            <span>191</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/readymade-garment-retailers/">Readymade Garment Retailers</a>
                            <span>1091</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/readymade-garment-wholesalers/">Readymade Garment Wholesalers</a>
                            <span>132</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/refrigerator-dealers/">Refrigerator Dealers</a>
                            <span>663</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/refrigerator-repair-services/">Refrigerator Repair &amp;Services</a>
                            <span>173</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/restaurants/">Restaurants</a>
                            <span>1533</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/restaurants-below-rs-500/">Restaurants (Below Rs 500)&nbsp;</a>
                            <span>654</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/rice-retailers/">Rice Retailers</a>
                            <span>450</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/rubber-product-manufacturers/">Rubber Product Manufacturers</a>
                            <span>167</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/salons/">Salons</a>
                            <span>1160</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/salwar-kameez-retailers/">Salwar Kameez Retailers</a>
                            <span>392</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sanitaryware-dealers/">Sanitaryware Dealers</a>
                            <span>660</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/saree-retailers/">Saree Retailers</a>
                            <span>370</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/school-bag-dealers/">School Bag Dealers</a>
                            <span>134</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/schools/">Schools</a>
                            <span>549</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/scooter-repair-services/">Scooter Repair &amp;Services</a>
                            <span>387</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/scrap-merchants/">Scrap Merchants</a>
                            <span>145</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/second-hand-car-dealers/">Second Hand Car Dealers</a>
                            <span>316</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/security-services/">Security Services</a>
                            <span>138</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/seed-retailers/">Seed Retailers</a>
                            <span>163</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/shirt-dealers/">Shirt Dealers</a>
                            <span>171</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/shoe-dealers/">Shoe Dealers</a>
                            <span>781</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/shoe-manufacturers/">Shoe Manufacturers</a>
                            <span>205</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/shoe-wholesalers/">Shoe Wholesalers</a>
                            <span>142</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/silver-jewellery-showrooms/">Silver Jewellery Showrooms</a>
                            <span>326</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/software-developers/">Software Developers</a>
                            <span>229</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sports-goods-dealers/">Sports Goods Dealers</a>
                            <span>600</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sports-goods-manufacturers/">Sports Goods Manufacturers</a>
                            <span>471</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sports-goods-wholesalers/">Sports Goods Wholesalers</a>
                            <span>147</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sportswear-manufacturers/">Sportswear Manufacturers</a>
                            <span>169</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/stationery-shops/">Stationery Shops</a>
                            <span>543</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/steel-dealers/">Steel Dealers</a>
                            <span>153</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/stock-brokers/">Stock Brokers</a>
                            <span>186</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/suit-retailers/">Suit Retailers</a>
                            <span>231</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sunglass-dealers/">Sunglass Dealers</a>
                            <span>163</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/surgical-equipment-dealers/">Surgical Equipment Dealers</a>
                            <span>210</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/sweet-shops/">Sweet Shops</a>
                            <span>423</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/t-shirt-dealers/">T-Shirt Dealers</a>
                            <span>206</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tv-dealers/">TV Dealers</a>
                            <span>786</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tv-repair-services/">TV Repair &amp;Services</a>
                            <span>113</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tailors/">Tailors</a>
                            <span>621</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tailors-for-ladies/">Tailors For Ladies</a>
                            <span>289</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tattoo-parlours-artists/">Tattoo Parlours &amp;Artists</a>
                            <span>104</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tax-consultants/">Tax Consultants</a>
                            <span>190</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/taxi-services/">Taxi Services</a>
                            <span>251</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/telecommunication-services/">Telecommunication Services</a>
                            <span>121</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/temples/">Temples</a>
                            <span>161</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tent-house/">Tent House</a>
                            <span>304</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tile-dealers/">Tile Dealers</a>
                            <span>330</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/timber-dealers/">Timber Dealers</a>
                            <span>107</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tool-dealers/">Tool Dealers</a>
                            <span>707</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tour-operators/">Tour Operators</a>
                            <span>268</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/toy-shops/">Toy Shops</a>
                            <span>102</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tractor-spare-part-dealers/">Tractor Spare Part Dealers</a>
                            <span>148</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/transporters/">Transporters</a>
                            <span>500</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/transporters-for-vehicle/">Transporters For Vehicle</a>
                            <span>165</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/travel-agents/">Travel Agents</a>
                            <span>970</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tutorials/">Tutorials</a>
                            <span>813</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/two-wheeler-repair-services/">Two Wheeler Repair &amp;Services</a>
                            <span>351</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/tyre-dealers/">Tyre Dealers</a>
                            <span>338</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/utensil-dealers/">Utensil Dealers</a>
                            <span>114</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/valve-dealers/">Valve Dealers</a>
                            <span>396</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/valve-manufacturers/">Valve Manufacturers</a>
                            <span>351</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/vastu-shastra-consultants/">Vastu Shastra Consultants</a>
                            <span>170</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/visa-assistance/">Visa Assistance</a>
                            <span>757</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/website-designers-developers/">Website Designers &amp;Developers</a>
                            <span>365</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/weight-loss-centres/">Weight Loss Centres</a>
                            <span>127</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/welding-job-works/">Welding Job Works</a>
                            <span>127</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/women-readymade-garment-retailers/">Women Readymade Garment Retailers</a>
                            <span>899</span>
                        </li>
                        <li>
                            <a href="https://www.apnajalandhar.com/wrist-watch-dealers/">Wrist Watch Dealers</a>
                            <span>209</span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <div id="sidebar">
                        <form role="search" method="get" class="search-form" action="https://www.apnajalandhar.com/">
                            <label>
                                <input type="search" class="search-field" placeholder="Search Here..." value="" name="s"/>
                            </label>
                            <button type="submit" class="search-submit">Search</button>
                        </form>
                        <div class="widget_text widget">
                            <h2>Advertisement</h2>
                            <div class="textwidget custom-html-widget">
                                <a href="https://www.thegeminigeeks.com/" rel="nofollow noopener" target="_blank">
                                    <img src="https://www.apnajalandhar.com/wp-content/uploads/2020/08/the-gemini-geeks.gif" width="300" height="300">
                                </a>
                                <a href="https://www.apnajalandhar.com/contact-us/">
                                    <img src="https://www.apnajalandhar.com/wp-content/uploads/2021/06/Promote-your-business.jpg" alt="Promote your business" width="300" height="300">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>`;

// Regular expression to match href and span content
// const regex = /<a href="(.*?)">.*?<\/a>\s*<span>(\d+)<\/span>/g;

const regex = /<a href="(.*?)">(.*?)<\/a>\s*<span>(\d+)<\/span>/g;

let matches;
const result = [];

while ((matches = regex.exec(htmlString)) !== null) {
//   const modifiedHref = matches[1] + "page/1/"; // Append /page/1 to the href
  const modifiedHref = matches[1]; // Append /page/1 to the href
  result.push({
    href: modifiedHref,
    name: matches[2].trim(),
    count: parseInt(matches[3], 10),
    totalPage: Math.ceil(parseInt(matches[3], 10) / 20),
  });
}


const outputPath = `apnaOutput/mainFile.json`;

fs.mkdirSync('apnaOutput', { recursive: true });
// fs.writeFileSync(`apnaOutput/mainFile${page}.json`, JSON.stringify(result, null, 2));
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
// fs.writeFileSync(`apnaOutput/mainFile.json`, JSON.stringify(result, null, 2));

console.log(result);
