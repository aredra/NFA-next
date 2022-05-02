export interface BoardType {
  id: string;
  moveNfa: string;
  reportDate: string;
  moveDate: string;
  moveTime: string;
  distance: number;
  arrivalDate: string;
  arrivalTime: string;
  returnDate: string;
  returnTime: string;
  patientGender: string;
  patientAge: number;
  accidentCity: string;
}

export interface BoardState {
  loading: boolean;
  data: BoardType[];
  error: any;
}
