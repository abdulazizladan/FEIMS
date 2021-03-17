export interface BuildingData{
  /** First form group */
  facilityType: string;
  facilityName: string;
  facilityCode: string;
  facilityDescription: string;
  facilityStructure: string;
  facilityPurpose: string;
  numberOfStoreys: number;
  dateBuilt: Date;
  datePurchased: Date;
  facilityLongitude: number;
  facilityLatitude: number;

  /** Second form group*/
  buildingFloorArea: number;
  buildingHeadRoom: number;
  numberOfFloor: number;
  superStructure: string;
  floorStructure: string;
  floorCovering: string;
  windows: string;
  exteriorWall: string
  paintCondition: string;
  mortarCondition: string;
  structureType: string;
  yearLastDecorated: number;

  floorJointsMaterials: string;
  floorJointsFinishes: string;
  floorJointsCondition: string;
  floorJointsRepairCost: number;

  ceilingMaterial: string;
  ceilingFinishes: string;
  ceilingCondition: string;
  ceilingRepairCost: number;

  fanLightMaterial: string;
  fanLightFinishes: string;
  fanLightCondition: string;
  fanLightRepairCost: number;

  doorsMaterial: string;
  doorsFinishes: string;
  doorsCondition: string;
  doorsRepairCost: number;

  roofStyleShape: string;
  roofTrussType: string;
  roofDeckingMaterial: string;

  trimMaterial: string;
  trimFinishes: string;
  trimCondition: string;
  trimRepairCost: number;

  foundationMaterial: string;
  foundationFinishes: string;
  foundationCondition: string;
  foundationRepairCost: number;

  floorSlabsMaterial: string;
  floorSlabsFinishes: string;
  floorSlabsCondition: string;
  floorSlabsRepairCost: number;

  frameMaterial: string;
  frameFinishes: string;
  frameCondition: string;
  frameRepairCost: number;

  buildingFacadeMaterial: string;
  buildingFacadeFinishes: string;
  buildingFacadeCondition: string;
  buildingFacadeRepairCost: number;

  buildingWindowsMaterial: string;
  buildingWindowsFinishes: string;
  buildingWindowsCondition: string;
  buildingWindowsRepairCost: number;

  corridorsMaterial: string;
  corridorsFinishes: string;
  corridorsCondition: string;
  corridorsRepairCost: number;

  glazingMaterial: string;
  glazingFinishes: string;
  glazingCondition: string;
  glazingRepairCost: number;

  partitionsMaterial: string;
  partitionsFinishes: string;
  partitionsCondition: string;
  partitionsRepairCost: number;

  entrancesMaterial: string;
  entrancesFinishes: string;
  entrancesCondition: string;
  entrancesRepairCost: string;

  serviceDuctMaterial: string;
  serviceDuctFinishes: string;
  serviceDuctCondition: string;
  serviceDuctRepairCost: number;

  furnitureMaterial: string;
  furnitureFinishes: string;
  furnitureCondition: string;
  furnitureRepairCost: number;
  /* Elevators */
  elevatorsCount: number;
  elevatorType: string;
  /* Elevator sensors */
  hasElectricEye: boolean;
  hasHeatSensor: boolean;

  elevatorKeyLocation: string;
  brandName: string;
  serviceCompany: string;
  elevatorServicePhoneNumber: number;
  emergencyShutoffLocation: string;
  elevatorExit: string;

  roofLightsCondition: string;
  roofLightsRepairCost: number;

  airQualityCondition: string;
  airQualityRepairCost: number;

  ventilationSystemCondition: string;
  ventilationSystemRepairCost: number;

  airConditioningCondition: string;
  airConditioningRepairCost: number;

  materialHandlingSystemCondition: string;
  materialHandlingSystemRepairCost: number;

  roofOpeningsCondition: string;
  roofOpeningsRepairCost: number;

  temperatureControlCondition: string;
  temperatureControlRepairCost: number;

  hotWaterCondition: string;
  hotWaterRepairCost: number;

  burglarProofCondition: string;
  burglarProofRepairCost: number;

  gatesCondition: string;
  gatesRepairCost: number;

  drainageCondition: string;
  drainageRepairCost: number;

  distributionCondition: string;
  distributionRepairCost: number;

  coldWaterCondition: string;
  coldWaterRepairCost: number;

  gasTanksCondition: string;
  gasTanksRepairCost: number;

  gasPipingCondition: string;
  gasPipingRepairCost: number;

  compressedAirCondition: string;
  compressedAirRepairCost: number;
}
