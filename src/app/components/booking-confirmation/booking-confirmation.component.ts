import { Component, OnInit } from '@angular/core';
import { FlightData } from 'src/app/model/FlightData';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  bookData: FlightData[];
  constructor(private allFlightService: AllFlightsDetailsService) { }

  ngOnInit(): void {
  }
  bookFlight(eid: number){
    // console.log('Rakesh');
    this.allFlightService.showBooking(eid).subscribe(data=>{
        this.bookData = data;
    });
    console.log(this.bookData);
  }
}
