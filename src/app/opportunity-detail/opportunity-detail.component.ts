import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { opportunityList, customerList, Opportunity, Customer } from '../customer-mock-list';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.scss']
})
export class OpportunityDetailComponent implements OnInit {

  opportunity: Opportunity
  customer: Customer

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.opportunity = this.loadOpportunity()
    this.customer = this.getCustomer(this.opportunity.cid)
  }

  loadOpportunity(): Opportunity{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id!==null){
      return opportunityList[id-1];
    }
  }

  getCustomer(cid): Customer{
    this.customer = customerList.find(cust=>{
      return cust.id == cid;
    }); 
    return this.customer;
  }
}
