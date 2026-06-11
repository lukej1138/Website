export interface projectPopUpData {
  timeFrame: string,
  description: string,
  checkOut: string,
  bullets: string[],
  tags: string[],
  popupImgURL: string,
}

export interface projectInfoData {
  id: number,
  title: string,
  projectImgURL: string,
  popUp: projectPopUpData,
  priority: number,
}
