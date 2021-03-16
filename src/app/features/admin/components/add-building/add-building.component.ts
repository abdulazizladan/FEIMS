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
      numberOfStoreys: [0, [
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
      facilityLongitude: [0, [
        Validators.required
      ]],
      facilityLatitude: [0, [
        Validators.required
      ]]
    })

    this.secondFormGroup = this.fb.group({
      buildingFloorArea: [0, [
        Validators.required
      ]],
      buildingHeadroom: [0, [
        Validators.required
      ]],
      numberOfFloors: [0, [
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
      yearDecorated: [0, [
        Validators.required
      ]],
      floorJointsMaterials: ['', [
        Validators.required
      ]],
      floorJointsFinishes: ['', [
        Validators.required
      ]],
      floorJointsCondition: ['', [
        Validators.required
      ]],
      floorJointsRepairCost: [0, [
        Validators.required
      ]],
      ceilingMaterial: ['', [
        Validators.required
      ]],
      ceilingFinishes: ['', [
        Validators.required
      ]],
      ceilingCondition: ['', [
        Validators.required
      ]],
      ceilingRepairCost: [0, [
        Validators.required
      ]],
      fanLightMaterial: ['', [
        Validators.required
      ]],
      fanLightFinishes: ['', [
        Validators.required
      ]],
      fanLightCondition: ['', [
        Validators.required
      ]],
      fanLightRepairCost: [0, [
        Validators.required
      ]],
      doorsMaterial: ['', [
        Validators.required
      ]],
      doorsFinishes: ['', [
        Validators.required
      ]],
      doorsCondition: ['', [
        Validators.required
      ]],
      doorsRepairCost: [0, [
        Validators.required
      ]],
      roofStyleShape: ['', [
        Validators.required
      ]],
      roofTrussType: ['', [
        Validators.required
      ]],
      roofDeckingMaterial: ['', [
        Validators.required
      ]],
      trimMaterial: ['', [
        Validators.required
      ]],
      trimFinishes: ['', [
        Validators.required
      ]],
      trimCondition: ['', [
        Validators.required
      ]],
      trimRepairCost: [0, [
        Validators.required
      ]],
      foundationMaterial: ['', [
        Validators.required
      ]],
      foundationFinishes: ['', [
        Validators.required
      ]],
      foundationCondition: ['', [
        Validators.required
      ]],
      foundationRepairCost: [0, [
        Validators.required
      ]],
      floorSlabsMaterial: ['', [
        Validators.required
      ]],
      floorSlabsFinishes: ['', [
        Validators.required
      ]],
      floorSlabsCondition: ['', [
        Validators.required
      ]],
      floorSlabsRepairCost: [0, [
        Validators.required
      ]],
      frameMaterial: ['', [
        Validators.required
      ]],
      frameFinishes: ['', [
        Validators.required
      ]],
      frameCondition: ['', [
        Validators.required
      ]],
      frameRepairCost: [0, [
        Validators.required
      ]],
      buildingFacadeMaterial: ['', [
        Validators.required
      ]],
      buildingFacadeFinishes: ['', [
        Validators.required
      ]],
      buildingFacadeCondition: ['', [
        Validators.required
      ]],
      buildingFacadeRepairCost: [0, [
        Validators.required
      ]],
      buildingWindowsMaterial: ['', [
        Validators.required
      ]],
      buildingWindowsFinishes: ['', [
        Validators.required
      ]],
      buildingWindowsCondition: ['', [
        Validators.required
      ]],
      buildingWindowsRepairCost: [0, [
        Validators.required
      ]],
      corridorsMaterial: ['', [
        Validators.required
      ]],
      corridorsFinishes: ['', [
        Validators.required
      ]],
      corridorsCondition: ['', [
        Validators.required
      ]],
      corridorsRepairCost: [0, [
        Validators.required
      ]],
      glazingMaterial: ['', [
        Validators.required
      ]],
      glazingFinishes: ['', [
        Validators.required
      ]],
      glazingCondition: ['', [
        Validators.required
      ]],
      glazingRepairCost: [0, [
        Validators.required
      ]],
      partitionsMaterial: ['', [
        Validators.required
      ]],
      partitionsFinishes: ['', [
        Validators.required
      ]],
      partitionsCondition: ['', [
        Validators.required
      ]],
      partitionsRepairCost: [0, [
        Validators.required
      ]],
      entrancesMaterial: ['', [
        Validators.required
      ]],
      entrancesFinishes: ['', [
        Validators.required
      ]],
      entrancesCondition: ['', [
        Validators.required
      ]],
      entrancesRepairCost: [0, [
        Validators.required
      ]],
      serviceDuctMaterial: ['', [
        Validators.required
      ]],
      serviceDuctFinishes: ['', [
        Validators.required
      ]],
      serviceDuctCondition: ['', [
        Validators.required
      ]],
      serviceDuctRepairCost: [0, [
        Validators.required
      ]],
      furnitureMaterial: ['', [
        Validators.required
      ]],
      furnitureFinishes: ['', [
        Validators.required
      ]],
      furnitureCondition: ['', [
        Validators.required
      ]],
      furnitureRepairCost: ['', [
        Validators.required
      ]],
      elevatorsCount: [0, [

      ]],
      elevatorType: ['', [

      ]],
      keyLocation: ['', [

      ]],
      brandName: ['', [

      ]],
      serviceCompany: ['', [

      ]],
      elevatorServicePhoneNumber: ['', [

      ]],
      emergencyShutoffLocation: ['', [

      ]],
      elevatorExit: ['', [

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
