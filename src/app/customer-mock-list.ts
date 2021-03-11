export const customerList: Customer[]=[
  { id: 1, photo: 'assets/logo1.png', name: 'Scoops Ice Cream Parlour', industry: 'Food and Restaurant', about: 'We specialize in fresh and authentic gelato and sorbet since 1990 serving the Oakville, Ontario community.', status: true },
  { id: 2, photo: 'assets/logo2.png', name: 'NuWorld Botanicals', industry: 'Beauty and Spa', about: 'We are specialists in organic beauty and wellness company specializing in aromatherapy-inspired spa grade body care and skin care products.', status: true },
  { id: 3, photo: 'assets/logo3.jpg', name: 'Shop Mom and Pop', industry: 'Retail', about: 'Family-owned and operated quilt shop, Long Arm Quilting, sewing, Alterations, Fabric Crafts and much more.We provide training for quilting and sewing all ages.', status: true },
  { id: 1, photo: 'assets/logo1.png', name: 'Scoops Ice Cream Parlour', industry: 'Food and Restaurant', about: 'We specialize in fresh and authentic gelato and sorbet since 1990 serving the Oakville, Ontario community.', status: true },
  { id: 2, photo: 'assets/logo2.png', name: 'NuWorld Botanicals', industry: 'Beauty and Spa', about: 'We are specialists in organic beauty and wellness company specializing in aromatherapy-inspired spa grade body care and skin care products.', status: true },
  { id: 3, photo: 'assets/logo3.jpg', name: 'Shop Mom and Pop', industry: 'Retail',  about: 'Family-owned and operated quilt shop, Long Arm Quilting, sewing, Alterations, Fabric Crafts and much more.We provide training for quilting and sewing all ages.', status: true },
  { id: 1, photo: 'assets/logo1.png', name: 'Scoops Ice Cream Parlour', industry: 'Food and Restaurant', about: 'We specialize in fresh and authentic gelato and sorbet since 1990 serving the Oakville, Ontario community.',status: true },
  { id: 2, photo: 'assets/logo2.png', name: 'NuWorld Botanicals', industry: 'Beauty and Spa', about: 'We are specialists in organic beauty and wellness company specializing in aromatherapy-inspired spa grade body care and skin care products.', status: true },
  { id: 3, photo: 'assets/logo3.jpg', name: 'Shop Mom and Pop', industry: 'Retail', about: 'Family-owned and operated quilt shop, Long Arm Quilting, sewing, Alterations, Fabric Crafts and much more.We provide training for quilting and sewing all ages.', status: true },
  { id: 1, photo: 'assets/logo1.png', name: 'Scoops Ice Cream Parlour', industry: 'Food and Restaurant', about: 'We specialize in fresh and authentic gelato and sorbet since 1990 serving the Oakville, Ontario community.', status: true },
  { id: 2, photo: 'assets/logo2.png', name: 'NuWorld Botanicals', industry: 'Beauty and Spa',about: 'We are specialists in organic beauty and wellness company specializing in aromatherapy-inspired spa grade body care and skin care products.', status: true },
  { id: 3, photo: 'assets/logo3.jpg', name: 'Shop Mom and Pop', industry: 'Retail', about: 'Family-owned and operated quilt shop, Long Arm Quilting, sewing, Alterations, Fabric Crafts and much more.We provide training for quilting and sewing all ages.', status: true },

];

export const opportunityList: Opportunity[]=[
  { id: 1, photo: 'assets/logo1.png', skill: 'Information Technology', calldetails: 'I need advice from someone with a lot of experience customizing google forms and sheets using google apps script. We are looking for help developing a new M&E tool.', cid: 1, status: true },
  { id: 2, photo: 'assets/logo2.png', skill: 'Website Design', calldetails: 'We are planning a refresh of our Squarespace site with new branding and photo assets. We seek feedback on the site and advice on the most important elements to focus on first.', cid: 2,status: true },
  { id: 3, photo: 'assets/logo3.jpg', skill: 'Social Media Marketing', calldetails: 'Assess the current state of their social media pages and gain actionable recommendations on how to improve presence and engagement.', cid: 3, status: true },
  { id: 1, photo: 'assets/logo1.png', skill: 'Information Technology', calldetails: 'I need advice from someone with a lot of experience customizing google forms and sheets using google apps script. We are looking for help developing a new M&E tool.', cid: 1, status: true },
  { id: 2, photo: 'assets/logo2.png', skill: 'Website Design', calldetails: 'We are planning a refresh of our Squarespace site with new branding and photo assets. We seek feedback on the site and advice on the most important elements to focus on first.', cid: 2, status: true },
  { id: 3, photo: 'assets/logo3.jpg', skill: 'Social Media Marketing', calldetails: 'Assess the current state of their social media pages and gain actionable recommendations on how to improve presence and engagement.', cid: 3, status: true },
  { id: 1, photo: 'assets/logo1.png', skill: 'Information Technology', calldetails: 'I need advice from someone with a lot of experience customizing google forms and sheets using google apps script. We are looking for help developing a new M&E tool.', cid: 1, status: true },
  { id: 2, photo: 'assets/logo2.png', skill: 'Website Design', calldetails: 'We are planning a refresh of our Squarespace site with new branding and photo assets. We seek feedback on the site and advice on the most important elements to focus on first.', cid: 2, status: true },
  { id: 3, photo: 'assets/logo3.jpg', skill: 'Social Media Marketing', calldetails: 'Assess the current state of their social media pages and gain actionable recommendations on how to improve presence and engagement.', cid: 3, status: true },
  { id: 1, photo: 'assets/logo1.png', skill: 'Information Technology', calldetails: 'I need advice from someone with a lot of experience customizing google forms and sheets using google apps script. We are looking for help developing a new M&E tool.', cid: 1, status: true },
  { id: 2, photo: 'assets/logo2.png', skill: 'Website Design', calldetails: 'We are planning a refresh of our Squarespace site with new branding and photo assets. We seek feedback on the site and advice on the most important elements to focus on first.', cid: 2, status: true },
  { id: 3, photo: 'assets/logo3.jpg', skill: 'Social Media Marketing', calldetails: 'Assess the current state of their social media pages and gain actionable recommendations on how to improve presence and engagement.', cid: 3, status: true },

];

export interface Opportunity {
  id: number,
  photo: string,
  skill: string,
  calldetails: string,
  cid: number,
  status: boolean
}

export interface Customer {
  id: number,
  photo: string,
  name: string,
  industry: string,
  about: string,
  status: boolean
}
