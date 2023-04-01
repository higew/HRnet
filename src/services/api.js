export const states = [
    {
        "name": "Alabama",
        "key": "AL"
    },
    {
        "name": "Alaska",
        "key": "AK"
    },
    {
        "name": "American Samoa",
        "key": "AS"
    },
    {
        "name": "Arizona",
        "key": "AZ"
    },
    {
        "name": "Arkansas",
        "key": "AR"
    },
    {
        "name": "California",
        "key": "CA"
    },
    {
        "name": "Colorado",
        "key": "CO"
    },
    {
        "name": "Connecticut",
        "key": "CT"
    },
    {
        "name": "Delaware",
        "key": "DE"
    },
    {
        "name": "District Of Columbia",
        "key": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "key": "FM"
    },
    {
        "name": "Florida",
        "key": "FL"
    },
    {
        "name": "Georgia",
        "key": "GA"
    },
    {
        "name": "Guam",
        "key": "GU"
    },
    {
        "name": "Hawaii",
        "key": "HI"
    },
    {
        "name": "Idaho",
        "key": "ID"
    },
    {
        "name": "Illinois",
        "key": "IL"
    },
    {
        "name": "Indiana",
        "key": "IN"
    },
    {
        "name": "Iowa",
        "key": "IA"
    },
    {
        "name": "Kansas",
        "key": "KS"
    },
    {
        "name": "Kentucky",
        "key": "KY"
    },
    {
        "name": "Louisiana",
        "key": "LA"
    },
    {
        "name": "Maine",
        "key": "ME"
    },
    {
        "name": "Marshall Islands",
        "key": "MH"
    },
    {
        "name": "Maryland",
        "key": "MD"
    },
    {
        "name": "Massachusetts",
        "key": "MA"
    },
    {
        "name": "Michigan",
        "key": "MI"
    },
    {
        "name": "Minnesota",
        "key": "MN"
    },
    {
        "name": "Mississippi",
        "key": "MS"
    },
    {
        "name": "Missouri",
        "key": "MO"
    },
    {
        "name": "Montana",
        "key": "MT"
    },
    {
        "name": "Nebraska",
        "key": "NE"
    },
    {
        "name": "Nevada",
        "key": "NV"
    },
    {
        "name": "New Hampshire",
        "key": "NH"
    },
    {
        "name": "New Jersey",
        "key": "NJ"
    },
    {
        "name": "New Mexico",
        "key": "NM"
    },
    {
        "name": "New York",
        "key": "NY"
    },
    {
        "name": "North Carolina",
        "key": "NC"
    },
    {
        "name": "North Dakota",
        "key": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "key": "MP"
    },
    {
        "name": "Ohio",
        "key": "OH"
    },
    {
        "name": "Oklahoma",
        "key": "OK"
    },
    {
        "name": "Oregon",
        "key": "OR"
    },
    {
        "name": "Palau",
        "key": "PW"
    },
    {
        "name": "Pennsylvania",
        "key": "PA"
    },
    {
        "name": "Puerto Rico",
        "key": "PR"
    },
    {
        "name": "Rhode Island",
        "key": "RI"
    },
    {
        "name": "South Carolina",
        "key": "SC"
    },
    {
        "name": "South Dakota",
        "key": "SD"
    },
    {
        "name": "Tennessee",
        "key": "TN"
    },
    {
        "name": "Texas",
        "key": "TX"
    },
    {
        "name": "Utah",
        "key": "UT"
    },
    {
        "name": "Vermont",
        "key": "VT"
    },
    {
        "name": "Virgin Islands",
        "key": "VI"
    },
    {
        "name": "Virginia",
        "key": "VA"
    },
    {
        "name": "Washington",
        "key": "WA"
    },
    {
        "name": "West Virginia",
        "key": "WV"
    },
    {
        "name": "Wisconsin",
        "key": "WI"
    },
    {
        "name": "Wyoming",
        "key": "WY"
    }
];

export const department = [
    { name: "Sales", key: "sal" },
    { name: "Marketing", key: "mar" },
    { name: "Engineering", key: "eng" },
    { name: "Human Resources", key: "hr" },
    { name: "Legal", key: "leg" },
];

export const columns = [
    { title: "First Name", accessor: "firstName", sortable: true },
    { title: "Last Name", accessor: "lastName", sortable: true },
    { title: "Start Date", accessor: "startDate", sortable: true },
    { title: "Department", accessor: "department", sortable: true },
    { title: "Date of Birth", accessor: "dateOfBirth", sortable: true },
    { title: "Street", accessor: "street", sortable: true },
    { title: "City", accessor: "city", sortable: true },
    { title: "State", accessor: "state", sortable: true },
    { title: "Zip Code", accessor: "zipCode", sortable: true },
];

export const datas = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        startDate: "2000-12-08",
        department: "Legal",
        dateOfBirth: "1980-11-17",
        street: "Ridge Street",
        city: "Anoka",
        state: "Minnesota",
        zipCode: "55303",
    },
    {
        id: 2, 
        firstName: "Emma", 
        lastName: "Thompson", 
        startDate: "2010-03-25", 
        department: "Human Resources", 
        dateOfBirth: "1960-04-15", 
        street: "Main Street", 
        city: "Birmingham", 
        state: "Alabama", 
        zipCode: "35201",
    },
    {
        id: 3, 
        firstName: "Ada", 
        lastName: "Lovelace", 
        startDate: "2008-09-18", 
        department: "Engineering", 
        dateOfBirth: "1815-12-10", 
        street: "Elm Street", 
        city: "Chicago", 
        state: "Illinois", 
        zipCode: "60601",
    },
    {
        id: 4, 
        firstName: "Albert", 
        lastName: "Einstein", 
        startDate: "1999-05-11", 
        department: "Engineering", 
        dateOfBirth: "1879-03-14", 
        street: "Park Avenue", 
        city: "New York", 
        state: "New York", 
        zipCode: "10022",
    },
    {
        id: 5, 
        firstName: "Grace", 
        lastName: "Hopper", 
        startDate: "2015-11-30", 
        department: "Engineering", 
        dateOfBirth: "1906-12-09", 
        street: "Chestnut Street", 
        city: "Philadelphia", 
        state: "Pennsylvania", 
        zipCode: "19106",
    },
    {
        id: 6, 
        firstName: "Nikola", 
        lastName: "Tesla", 
        startDate: "1995-08-01", 
        department: "Engineering", 
        dateOfBirth: "1856-07-10", 
        street: "Market Street", 
        city: "San Francisco", 
        state: "California", 
        zipCode: "94103",
    },
    {
        id: 7, 
        firstName: "Marie", 
        lastName: "Curie", 
        startDate: "2002-04-10", 
        department: "Engineering", 
        dateOfBirth: "1867-11-07", 
        street: "Madison Avenue", 
        city: "New York", 
        state: "New York", 
        zipCode: "10016",
    },
    {
        id: 8, 
        firstName: "Charles", 
        lastName: "Babbage", 
        startDate: "2012-12-12", 
        department: "Sales", 
        dateOfBirth: "1791-12-26", 
        street: "Washington Street", 
        city: "Boston", 
        state: "Massachusetts", 
        zipCode: "02108",
    },
    {
        id: 9, 
        firstName: "Margaret", 
        lastName: "Hamilton", 
        startDate: "2019-06-17", 
        department: "Marketing", 
        dateOfBirth: "1936-08-17", 
        street: "Arlington Street", 
        city: "Boston", 
        state: "Massachusetts", 
        zipCode: "02116",
    },
    {
        id: 10, 
        firstName: "Tim", 
        lastName: "Berners-Lee", 
        startDate: "2001-10-22", 
        department: "Human Resources", 
        dateOfBirth: "1955-06-08", 
        street: "Hollywood Boulevard", 
        city: "Los Angeles", 
        state: "California", 
        zipCode: "90028",
    },
    {
        id: 11, 
        firstName: "Katherine", 
        lastName: "Johnson", 
        startDate: "2014-02-03", 
        department: "Marketing", 
        dateOfBirth: "1918-08-26", 
        street: "Rodeo Drive", 
        city: "Beverly Hills", 
        state: "California", 
        zipCode: "90210",
    },
    {
        id: 12, 
        firstName: "Alan", 
        lastName: "Turing", 
        startDate: "2000-06-23", 
        department: "Legal", 
        dateOfBirth: "1912-06-23", 
        street: "Gonzales Drive", 
        city: "Corpus Christi", 
        state: "Texas", 
        zipCode: "78418",
    },
    {
        id: 13, 
        firstName: "Mae", 
        lastName: "Jemison", 
        startDate: "2016-09-12", 
        department: "Legal", 
        dateOfBirth: "1956-10-17", 
        street: "Haight Street", 
        city: "San Francisco", 
        state: "California", 
        zipCode: "94117",
    },
    {
        id: 14, 
        firstName: "Stephen", 
        lastName: "Hawking", 
        startDate: "1993-11-14", 
        department: "Engineering", 
        dateOfBirth: "1942-01-08", 
        street: "Thatcher St.", 
        city: "Victoria", 
        state: "Texas", 
        zipCode: "77904",
    },
    {
        id: 15, 
        firstName: "Rosie", 
        lastName: "the Riveter", 
        startDate: "1942-12-07", 
        department: "Marketing", 
        dateOfBirth: "1921-08-26", 
        street: "Oak Street", 
        city: "Ypsilanti", 
        state: "Michigan", 
        zipCode: "48197",
    },
    {
        id: 16, 
        firstName: "Elon", 
        lastName: "Musk", 
        startDate: "2004-03-14", 
        department: "Engineering", 
        dateOfBirth: "1971-06-28", 
        street: "Fifth Avenue", 
        city: "New York", 
        state: "New York", 
        zipCode: "10001",
    },
    {
        id: 17, 
        firstName: "Rosalind", 
        lastName: "Franklin", 
        startDate: "1951-10-01", 
        department: "Legal", 
        dateOfBirth: "1920-07-25", 
        street: "Wentworth Avenue", 
        city: "Schererville", 
        state: "Indiana", 
        zipCode: "46375",
    },
    {
        id: 18, 
        firstName: "Linus", 
        lastName: "Torvalds", 
        startDate: "1991-08-25", 
        department: "Human Resources", 
        dateOfBirth: "1969-12-28", 
        street: "Mission Street", 
        city: "San Francisco", 
        state: "California", 
        zipCode: "94105",
    },
    {
        id: 19, 
        firstName: "Sheryl", 
        lastName: "Sandberg", 
        startDate: "2008-03-11", 
        department: "Sales", 
        dateOfBirth: "1969-08-28", 
        street: "Market Street", 
        city: "San Francisco", 
        state: "California", 
        zipCode: "94103",
    },
    {
        id: 20, 
        firstName: "Bill", 
        lastName: "Gates", 
        startDate: "1975-04-04", 
        department: "Sales", 
        dateOfBirth: "1955-10-28", 
        street: "Redmond Way", 
        city: "Redmond", 
        state: "Washington", 
        zipCode: "98052",
    },
];