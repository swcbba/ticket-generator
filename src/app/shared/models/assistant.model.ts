export interface Assistant {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  deleteFlag: boolean;
  phoneNumber?: string;
  addDate?: Date;
  updateDate?: Date;
  checkIn?: boolean;
  secondCheckIn?: boolean;
  thirdCheckIn?: boolean;
  fridayDinner?: boolean;
  saturdayBreakfast?: boolean;
  saturdayLunch?: boolean;
  saturdayDinner?: boolean;
  sundayBreakfast?: boolean;
  sundayLunch?: boolean;
  visibleInSearch?: boolean;
  qrSent?: boolean;
}
