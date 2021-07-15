import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-listing-page",
  templateUrl: "./edit-listing-page.component.html",
  styleUrls: ["./edit-listing-page.component.css"],
})
export class EditListingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(`Saving changes to the listing...`);
    this.router.navigateByUrl("/my-listings");
  }
}
