export interface Employee {
    id: number;
    name: string;
    level: 1 | 2 | 3 | 4;
    jobTitle: string;
    profileImageUrl: string;
    reportTo: number;
}

export const employeeList: Employee[] = [
    {
        id: 1,
        name: "Zac Lindsay",
        level: 1,
        jobTitle: "CEO",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 0,
    },
    {
        id: 2,
        name: "Lucas Weston",
        level: 2,
        jobTitle: "Director",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 1,
    },
    {
        id: 3,
        name: "Tyson Spark",
        level: 2,
        jobTitle: "CEO",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 1,
    },
    {
        id: 4,
        name: "Joshua Hare",
        level: 3,
        jobTitle: "Manager",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 2,
    },
    {
        id: 5,
        name: "Joshua Howard",
        level: 3,
        jobTitle: "Manager",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 2,
    },
    {
        id: 6,
        name: "Bailey Eddy",
        level: 3,
        jobTitle: "Manager",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 3,
    },
    {
        id: 7,
        name: "Hunter Purton",
        level: 3,
        jobTitle: "Manager",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 3,
    },
    {
        id: 8,
        name: "Jordan Powers",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 4,
    },
    {
        id: 9,
        name: "Jordan Wardill",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 4,
    },
    {
        id: 10,
        name: "David Battye",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 4,
    },
    {
        id: 11,
        name: "Jett Muirden",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 4,
    },
    {
        id: 12,
        name: "Archer Rudall",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 5,
    },
    {
        id: 13,
        name: "Cody Harrhy",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 5,
    },
    {
        id: 14,
        name: "Ali Skertchly",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 5,
    },
    {
        id: 15,
        name: "Harrison Kneebone",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 5,
    },
    {
        id: 16,
        name: "Riley Finsch",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 6,
    },
    {
        id: 17,
        name: "Taj Gatliff",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 6,
    },
    {
        id: 18,
        name: "Michael Marion",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 6,
    },
    {
        id: 19,
        name: "Jett Kershaw",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 6,
    },
    {
        id: 20,
        name: "Dean McWilliam",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 7,
    },
    {
        id: 21,
        name: "Hamish Finnis",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 7,
    },
    {
        id: 22,
        name: "Harrison Broadby",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 7,
    },
    {
        id: 23,
        name: "Sebastian Broomfield",
        level: 4,
        jobTitle: "Developer",
        profileImageUrl: `https://i.pravatar.cc/${Math.floor(
            Math.random() * 10 + 1
        )}00`,
        reportTo: 7,
    },
];
