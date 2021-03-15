import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {

  private addBuildingForm: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  constructor( private buildingService: BuildingService, private fb: FormBuilder) { }

  ngOnInit(): void{
    this.firstFormGroup = this.fb.group({
      facilityType: ['', [
        Validators.required
      ]],
      facilityName: ['', [
        Validators.required
      ]],
      facilityCode: ['', [
        Validators.required
      ]],
      facilityDescription: ['', [
        Validators.required
      ]],
      facilityStructure: ['', [
        Validators.required
      ]],
      facilityPurpose: ['', [
        Validators.required
      ]],
      numberOfStoreys: ['', [
        Validators.required
      ]],
      facilityStatus: ['', [
        Validators.required
      ]],
      facilityDateBuilt: ['', [
        Validators.required
      ]],
      facilityDatePurchased: ['', [
        Validators.required
      ]],
      facilityLongitude: ['', [
        Validators.required
      ]],
      facilityLatitude: ['', [
        Validators.required
      ]]
    })

    this.secondFormGroup = this.fb.group({
      buildingFloorArea: ['', [
        Validators.required
      ]],
      buildingHeadroom: ['', [
        Validators.required
      ]],
      numberOfFloors: ['', [
        Validators.required
      ]],
      superStructure: ['', [
        Validators.required
      ]],
      floorStructure: ['', [
        Validators.required
      ]],
      floorCovering: ['', [
        Validators.required
      ]],
      windows: ['', [
        Validators.required
      ]],
      exteriorWall: ['', [
        Validators.required
      ]],
      paintCondition: ['', [
        Validators.required
      ]],
      mortarCondition: ['', [
        Validators.required
      ]],
      structureType: ['', [
        Validators.required
      ]],
      yearDecorated: ['', [
        Validators.required
      ]],
      floorMaterials: ['', [
        Validators.required
      ]],
      floorFinishes: ['', [
        Validators.required
      ]],
      floorCondition: ['', [
        Validators.required
      ]],
      floorRepairCost: ['', [
        Validators.required
      ]],
      ceilingMaterial: ['', [
        Validators.required
      ]],
      ceilingFinishes: ['', [
        Validators.required
      ]]
    })

    this.thirdFormGroup = this.fb.group({

    })
  }

  ngOnDestroy(){

  }

  addBuilding(){
    this.buildingService.addBuilding(this.addBuildingForm.value).subscribe(
      //res=>{
      //  console.log(this.firstFormGroup.value)
      //},err=>{
      //  console.log("error submitting form data.")
      //}

    )
  }

  addBuildings(){
    console.log(this.firstFormGroup.value)
  }

}
