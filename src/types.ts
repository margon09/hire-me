export interface Child {
  childId: string
  institutionId: string
  groupId: string
  createdTime: string
  name: ChildName
  birthday: string | null
  homeAddress: string | null
  extraInfo: string
  language: string
  nationality: string
  birthplace: string
  gender: number
  startDate: string
  endDate: string | null
  leavingReason: string | null
  isTestChild: boolean
  relations: any[] | null
  image: ChildImage
  isSleeping: boolean
  naps: any[]
  hasVacation: boolean
  isSick: boolean
  isAbsent: boolean
  leaves: any[]
  onBus: boolean
  onTrip: boolean
  statuses: any[]
  statusRegistrations: any[]
  checkins: ChildCheckin[]
  checkedIn: boolean
  checkinTime: string | null
  pickupTime: string | null
  pickupRelationId: string | null
  pickupName: string
}

export interface ChildName {
    fullName: string
    firstName: string
    middleName: string
    lastName: string
}

export interface ChildImage {
  small: string
  large: string
  empty: boolean
  colorCode: number
}

export interface ChildCheckin {
  childCheckinId: string
  childId: string
  institutionId: string
  groupId: string
  checkinTime: string
  pickupTime: string | null
  pickupRelationId: string
  goHomeWithChildId: string
  checkoutTime: string | null
  checkinLoginId: string
  checkoutLoginId: string
  autoCheckedOut: boolean
  deletedAt: string | null
  hours: number
  checkinStatements: any[] | null
}