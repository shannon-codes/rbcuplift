import { Component, OnInit } from '@angular/core';
import { opportunityList, Opportunity, customerList, Customer } from '../customer-mock-list';

@Component({
  selector: 'app-employee-opportunities',
  templateUrl: './employee-opportunities.component.html',
  styleUrls: ['./employee-opportunities.component.scss']
})
export class EmployeeOpportunitiesComponent implements OnInit {

  customerList: Customer[];
  list: Opportunity[];
  selectedCategory;
  categories = ["Accounting", 
                "Branding",
                "Coaching",
                "Data Analysis",
                "Database Administration",
                "Digital Advertising",
                "Entrepreneurship",
                "Event Planning",
                "Graphic Design",
                "Information Technology",
                "Project Management",
                "Public Relations",
                "Marketing",
                "Sales",
                "Social Media Marketing",
                "Talent Recruitment",
                "Website Design",
                "Writing",  
                "All"
              ]

  constructor() {
    this.list = opportunityList;
    
    this.customerList = customerList;
    this.selectedCategory = "Select Skill Requested"
  }

  ngOnInit() {
  }

  valueSelected() {
    this.list = opportunityList.filter(item => item.skill.toUpperCase().includes(this.selectedCategory.toUpperCase()) || this.selectedCategory === "All" || this.selectedCategory === "Select Skill Requested");
  }

  getCustomer(cid): string{
    var customer = customerList.find(customer =>{
      return customer.id == cid
    })
    return customer.name;
  }

}
