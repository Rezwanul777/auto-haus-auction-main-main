export interface NordicCountry {
  id: string;
  name: string;
  code: string;
  plateImage: string;
  bgColor: string;
  textColor: string;
}

export const NORDIC_COUNTRIES: NordicCountry[] = [
  { 
    id: "SE", 
    name: "Sverige", 
    code: "S", 
    plateImage: "/lovable-uploads/96547290-5388-42ad-902b-82b2dbbe2446.png",
    bgColor: "#003399",
    textColor: "#FFFFFF"
  },
  { 
    id: "DK", 
    name: "Danmark", 
    code: "DK", 
    plateImage: "/lovable-uploads/3d48902c-a088-4967-8f13-d306f95d0510.png",
    bgColor: "#003399",
    textColor: "#FFFFFF"
  },
  { 
    id: "FI", 
    name: "Finland", 
    code: "FIN", 
    plateImage: "/lovable-uploads/1671bfbc-a8ed-4c6d-bea5-93ab67cdd8dd.png",
    bgColor: "#003399",
    textColor: "#FFFFFF"
  },
  { 
    id: "NO", 
    name: "Norge", 
    code: "N", 
    plateImage: "/lovable-uploads/1ce98091-0d06-4c04-a408-3290ff7262cd.png",
    bgColor: "#003399",
    textColor: "#FFFFFF"
  }
];