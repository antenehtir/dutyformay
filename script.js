document.getElementById("getDoctorBtn").addEventListener("click", function() {
    var selectedDate = new Date(document.getElementById("date").value);
    var selectedArea = document.getElementById("area").value;

    var phoneNumbers = {
        "Dr. Dawit": "+251920192199",
        "Dr. Lewam": "+251934343144",
        "Dr. Helina": "+251913110147",
        "Dr. Anteneh": "+251912412707",
        "Dr. Genet": "+251921931429",
        "Dr. Rediet": "+251021146518",
        "Dr. Rewina": "+251913670699"
    };

    var schedule = {
        "May 01": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "May 02": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Anteneh"},
        "May 03": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam"},
        "May 04": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "May 05": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "May 06": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "May 07": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "May 08": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "May 09": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "May 10": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "May 11": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "May 12": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "May 13": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "May 14": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "May 15": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "May 16": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "May 17": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "May 18": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "May 19": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "May 20": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "May 21": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "May 22": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "May 23": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "May 24": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "May 25": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "May 26": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "May 27": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "May 28": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "May 29": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "May 30": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "May 31": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"}
    };

    var formattedDate = formatDate(selectedDate);
    var doctorName = schedule[formattedDate] ? schedule[formattedDate][selectedArea] : null;
    var doctorPhoneNumber = doctorName ? phoneNumbers[doctorName] : null;
    var doctorElement = document.getElementById("doctor");

    if (doctorName) {
        doctorElement.innerHTML = "Doctor on duty for " + selectedArea + " on " + formattedDate + " is <strong>" + doctorName + "</strong>. <br> Phone number: " + doctorPhoneNumber;
    } else {
        doctorElement.innerText = "No schedule found for the selected date.";
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("doctor").innerText = "";
    document.getElementById("date").value = "";
});

function formatDate(date) {
    var month = date.getMonth() + 1; // Months are zero based
    var day = date.getDate();
    return "May " + (day < 10 ? '0' : '') + day;
}
