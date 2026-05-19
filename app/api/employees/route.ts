import { NextResponse } from "next/server";

export async function GET() {
  const employees = [
    { Name: "Arid Rahman", ID: "NGO-10024", Role: "Not specified" },
    { Name: "Sadia Islam", ID: "NGO-10080", Role: "Not specified" },
    { Name: "Kamal Hossain", ID: "NGO-10055", Role: "Not specified" },
    { Name: "Sumika", ID: "", Role: "Not specified" },
    { Name: "Fitter", ID: "", Role: "Fitter" },
  ];

  return NextResponse.json(employees);
}