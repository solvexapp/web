export type AttendanceMark = "P" | "A" | "T";

export type Student = {
  name: string;
  lu: string;
  initials: string;
  avatar: "a1" | "a2" | "a3" | "a4" | "a5";
  defaultMark: AttendanceMark;
  grade: string;
  presence: AttendanceMark[];
};

export const STUDENTS: Student[] = [
  {
    name: "Martina Fernández",
    lu: "38291",
    initials: "MF",
    avatar: "a1",
    defaultMark: "P",
    grade: "9.5",
    presence: ["P", "P", "P", "P", "P"],
  },
  {
    name: "Santiago Acevedo",
    lu: "38301",
    initials: "SA",
    avatar: "a2",
    defaultMark: "P",
    grade: "8.0",
    presence: ["P", "T", "P", "P", "P"],
  },
  {
    name: "Joaquín Ramírez",
    lu: "38312",
    initials: "JR",
    avatar: "a3",
    defaultMark: "A",
    grade: "7.5",
    presence: ["P", "P", "A", "P", "P"],
  },
  {
    name: "Valentina Castro",
    lu: "38319",
    initials: "VC",
    avatar: "a4",
    defaultMark: "P",
    grade: "10",
    presence: ["P", "P", "P", "P", "P"],
  },
  {
    name: "Tomás González",
    lu: "38327",
    initials: "TG",
    avatar: "a5",
    defaultMark: "T",
    grade: "8.5",
    presence: ["P", "P", "P", "T", "P"],
  },
  {
    name: "Camila López",
    lu: "38334",
    initials: "CL",
    avatar: "a1",
    defaultMark: "P",
    grade: "9.0",
    presence: ["P", "P", "P", "P", "P"],
  },
  {
    name: "Juan Pablo Ruiz",
    lu: "38341",
    initials: "JR",
    avatar: "a2",
    defaultMark: "P",
    grade: "7.8",
    presence: ["P", "P", "P", "P", "T"],
  },
  {
    name: "Sofía Méndez",
    lu: "38358",
    initials: "SM",
    avatar: "a3",
    defaultMark: "P",
    grade: "8.7",
    presence: ["P", "P", "P", "P", "P"],
  },
];

export const AVATAR_CLASSES: Record<Student["avatar"], string> = {
  a1: "bg-[#5DCAA5] text-[#04342C]",
  a2: "bg-[#F0E6D2] text-[#854F0B]",
  a3: "bg-[#AFA9EC] text-[#26215C]",
  a4: "bg-[#F4C0D1] text-[#4B1528]",
  a5: "bg-[#85B7EB] text-[#0C447C]",
};
