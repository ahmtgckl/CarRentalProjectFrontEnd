import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetails[] = [];
  carImages: CarImage[] = [];
  baseUrl = "https://localhost:44310/Uploads/Images/"
  imageOfPath: string;

  brands: Brand[] = [];
  colors: Color[] = [];

  filterText = "";
  cardetailFilter = '';
  brandFilter: number = 0;
  colorFilter: number = 0;
  branddFilter: number = 0;
  colorrFilter: number = 0;


  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private carImageService: CarImageService,
    private toastrService: ToastrService) { }     //service'leri kullanabilmek için yapılır

  ngOnInit(): void {
    this.getBrands();
    this.getColors();






    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"] && params["brandId"]) {
        this.getCarDetailByColorAndBrand(params["colorId"], params["brandId"])
      }

      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }

      else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })


  }




  getCars() {
    this.carService.getCars().subscribe(response => { this.cars = response.data });
  }




  getBrands() {
    this.brandService.getBrands().subscribe(response => { this.brands = response.data });
  }




  getColors() {
    this.colorService.getColors().subscribe(response => { this.colors = response.data });
  }




  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => { this.cars = response.data });
  }




  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
    })
  }




  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cars = response.data;
      });
  }




  getSelectedBrand(brandId: number) {
    debugger;
    if (this.brandFilter == brandId) return true;
    else return false;
  }




  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId) return true;
    else return false;
  }




  image(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      const imagePath = response.data[0].imagePath
      this.imageOfPath = this.baseUrl + imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
  }




  setFilter() {
    this.toastrService.success("filtre uygulandı")
    console.log("FİLTRE")
  }




}
