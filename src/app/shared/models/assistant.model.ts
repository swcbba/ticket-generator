export interface Assistant {
  id: string;
  fullName?: string;
  email: string;
  deleteFlag: boolean;
  phoneNumber?: string;
  addDate?: Date;
  updateDate?: Date;
  checkIn?: boolean;
  visibleInSearch?: boolean;
}
