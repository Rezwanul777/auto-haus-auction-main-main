/* eslint-disable @typescript-eslint/no-explicit-any */


// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// interface BasicInformationProps {
//   basicInfo: {
//     registrationNumber: string;
//     mileage: string;
//     year: string;
//     engine: string;
//     color: string;
//     condition: string;
//     transmission: string;
//     horsepower: string;
//   };
//   onBasicInfoChange: (info: any) => void;
// }

// const BasicInformation = ({
//   basicInfo,
//   onBasicInfoChange,
// }: BasicInformationProps) => {
//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader className="sm:text-start sm:text-lg sm:font-semibold">
//         <CardTitle className="md:text-center sm:text-start sm:text-lg sm:font-semibold">Ange registreringsnummer</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-3">
//           <Input
//             id="registration"
//             value={basicInfo.registrationNumber}
//             onChange={(e) =>
//               onBasicInfoChange({
//                 ...basicInfo,
//                 registrationNumber: e.target.value.toUpperCase(),
//               })
//             }
//             placeholder="ABC123"
//             className="text-center text-2xl h-14 tracking-widest uppercase"
//             maxLength={6}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BasicInformation;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BasicInformationProps {
  basicInfo: {
    registrationNumber: string;
    mileage: string;
    year: string;
    engine: string;
    color: string;
    condition: string;
    transmission: string;
    horsepower: string;
  };
  onBasicInfoChange: (info: any) => void;
}

const BasicInformation = ({
  basicInfo,
  onBasicInfoChange,
}: BasicInformationProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-base xs:text-lg sm:text-xl md:text-center break-words hyphens-auto">
          Ange registreringsnummer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Input
            id="registration"
            value={basicInfo.registrationNumber}
            onChange={(e) =>
              onBasicInfoChange({
                ...basicInfo,
                registrationNumber: e.target.value.toUpperCase(),
              })
            }
            placeholder="ABC123"
            className="text-center text-2xl h-14 tracking-widest uppercase"
            maxLength={6}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInformation;
