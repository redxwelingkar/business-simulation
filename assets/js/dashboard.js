$("document").ready(function () {
    //$("#").click()
    var whichSelected = "Null";

    // * Market Landscape and Scales Page Animations
    $("#marketLandscape").hide();
    $("#TAM").hide();
    $("#SOM").hide();
    $("#SAM").hide();
    $("#CSP").hide();

    $("#img1").click(function () {
        $("#img1").animate({ left: "5%", width: "90%" }, { duration: 1000 });
        $("#img2").animate({ left: "150%" }, { duration: 1000 });
        $("#img3").animate({ left: "150%" }, { duration: 800 });
        $("#img4").animate({ left: "150%" }, { duration: 550 });
        $("#marketLandscape")
            .show()
            .animate({ "margin-right": "25%" }, { duration: 1000, queue: true });
        $("#imgBack1").animate(
            { left: "-12%", width: "25%" },
            {
                duration: 500,
                complete: function () {
                    $("#headerButtons").fadeIn({ queue: true });
                },
            }
        );
        $("#name1").animate(
            { left: "-16.1%", width: "25%", opacity: "0.0" },
            { duration: 600 }
        );
        //$('#marketLandscape').show();
        whichSelected = "img1";
    });

    $("#totalAddresable").click(function () {
        $("#totalAddresable").css({ "background-color": "#00506E" });
        $("#serviceableAdd").css({ "background-color": "#E89572" });
        $("#customerSpending").css({ "background-color": "#E89572" });
        $("#serviceableObt").css({ "background-color": "#E89572" });
        $("#TAM").show();
        $("#SAM").hide();
        $("#CSP").hide();
        $("#SOM").hide();
    });

    $("#serviceableAdd").click(function () {
        $("#serviceableAdd").css({ "background-color": "#00506E" });
        $("#totalAddresable").css({ "background-color": "#E89572" });
        $("#customerSpending").css({ "background-color": "#E89572" });
        $("#serviceableObt").css({ "background-color": "#E89572" });
        $("#TAM").hide();
        $("#SAM").show();
        $("#CSP").hide();
        $("#SOM").hide();
    });

    $("#customerSpending").click(function () {
        $("#customerSpending").css({ "background-color": "#00506E" });
        $("#serviceableAdd").css({ "background-color": "#E89572" });
        $("#totalAddresable").css({ "background-color": "#E89572" });
        $("#serviceableObt").css({ "background-color": "#E89572" });
        $("#TAM").hide();
        $("#SAM").hide();
        $("#CSP").show();
        $("#SOM").hide();
    });

    $("#serviceableObt").click(function () {
        $("#serviceableObt").css({ "background-color": "#00506E" });
        $("#serviceableAdd").css({ "background-color": "#E89572" });
        $("#totalAddresable").css({ "background-color": "#E89572" });
        $("#customerSpending").css({ "background-color": "#E89572" });
        $("#TAM").hide();
        $("#SAM").hide();
        $("#CSP").hide();
        $("#SOM").show();
    });

    // * Operational Expenditure Page Animations
    $("#operationalExpenditure").hide();
    $("#opExp").hide();
    $("#fixedCosts").hide();

    $("#img2").click(function () {
        $("#img1").animate({ left: "-50%" }, { duration: 1000 });
        $("#img2").animate({ left: "5%", width: "90%" }, { duration: 700 });
        $("#img3").animate({ left: "150%" }, { duration: 1000 });
        $("#img4").animate({ left: "150%" }, { duration: 750 });
        $("#operationalExpenditure")
            .show()
            .animate({ "margin-right": "25%" }, { duration: 1000, queue: true });
        $("#imgBack2").animate(
            { left: "-12%", width: "25%" },
            {
                duration: 500,
                complete: function () {
                    $("#headerButtons").fadeIn({ queue: true });
                },
            }
        );
        $("#name2").animate(
            { left: "-16.1%", width: "25%", opacity: "0.0" },
            { duration: 600 }
        );
        whichSelected = "img2";
    });

    $("#operExpen").click(function () {
        $("#operExpen").css({ "background-color": "#00506E" });
        $("#fixCos").css({ "background-color": "#E89572" });
        $("#opExp").show();
        $("#fixedCosts").hide();
    });

    $("#fixCos").click(function () {
        $("#operExpen").css({ "background-color": "#E89572" });
        $("#fixCos").css({ "background-color": "#00506E" });
        $("#opExp").hide();
        $("#fixedCosts").show();
    });

    // * Capital Expenditure Page Animations
    $("#capitalExpenditure").hide();

    $("#img3").click(function () {
        $("#img1").animate({ left: "-150%" }, { duration: 550 });
        $("#img2").animate({ left: "-150%" }, { duration: 800, delay: 100 });
        $("#img3").animate(
            { left: "5%", width: "90%" },
            { duration: 1000, delay: 100 }
        );
        $("#img4").animate({ left: "150%" }, { duration: 550 });
        $("#capitalExpenditure")
            .show()
            .animate({ "margin-right": "25%" }, { duration: 1000, queue: true });
        $("#imgBack3").animate(
            { left: "-12%", width: "25%" },
            {
                duration: 700,
                complete: function () {
                    $("headerButtons_1").fadeIn({ queue: true });
                },
            }
        );
        $("#name3").animate(
            { left: "-16.1%", width: "25%", opacity: "0.0" },
            { duration: 900 }
        );
        whichSelected = "img3";
    });

    // * Sourcing Funds and Capital Page Animations
    $("#sourcingFunds").hide();

    $("#img4").click(function () {
        $("#img1").animate({ left: "-150%" }, { duration: 550 });
        $("#img2").animate({ left: "-150%" }, { duration: 800 });
        $("#img3").animate({ left: "-150%" }, { duration: 800 });
        $("#img4").animate({ left: "5%", width: "90%" }, { duration: 1000 });
        $("#sourcingFunds")
            .show()
            .animate({ "margin-right": "25%" }, { duration: 1000, queue: true });
        $("#imgBack4").animate(
            { left: "-12%", width: "25%" },
            {
                duration: 700,
                complete: function () {
                    $("#headerButtons_2").fadeIn({ queue: true });
                },
            }
        );
        $("#name4").animate(
            { left: "-16.1%", width: "25%", opacity: "0.0" },
            { duration: 900 }
        );
        whichSelected = "img4";
    });

    // * Back Button
    $("#backImg").click(function () {
        console.log(whichSelected);
        if (whichSelected === "img1") {
            console.log("dfg");
            $("#img1").animate({ left: "5%", width: "20%" }, { duration: 10 });
            $("#img2").animate({ left: "28%" }, { duration: 10 });
            $("#img3").animate({ left: "51%" }, { duration: 10 });
            $("#img4").animate({ left: "74%" }, { duration: 10 });
            $("#imgBack1").animate({ left: "0px", width: "100%" }, { duration: 10 });
            $("#name1").animate(
                { left: "0%", width: "96%", opacity: "1.0" },
                { duration: 10 }
            );
            $("#marketLandscape").hide();
        } else if (whichSelected === "img2") {
            $("#img1").animate({ left: "5%" }, { duration: 550 });
            $("#img2").animate({ left: "28%", width: "21%" }, { duration: 550 });
            $("#img3").animate({ left: "51%" }, { duration: 550 });
            $("#img4").animate({ left: "74%" }, { duration: 550 });
            $("#imgBack2").animate({ left: "0px", width: "100%" }, { duration: 700 });
            $("#name2").animate(
                { left: "00%", width: "96%", opacity: "1.0" },
                { duration: 600 }
            );
            $("#operationalExpenditure").hide();
        } else if (whichSelected === "img3") {
            $("#img1").animate({ left: "5%" }, { duration: 550 });
            $("#img2").animate({ left: "28%" }, { duration: 550 });
            $("#img3").animate({ left: "51%", width: "21%" }, { duration: 550 });
            $("#img4").animate({ left: "74%" }, { duration: 550 });
            $("#imgBack3").animate({ left: "0px", width: "100%" }, { duration: 700 });
            $("#name3").animate(
                { left: "0px", width: "96%", opacity: "1.0" },
                { duration: 900 }
            );
            $("#capitalExpenditure").hide();
        } else if (whichSelected === "img4") {
            console.log("fghdfrg");
            $("#img1").animate({ left: "5%" }, { duration: 550 });
            $("#img2").animate({ left: "28%" }, { duration: 550 });
            $("#img3").animate({ left: "51%" }, { duration: 550 });
            $("#img4").animate({ left: "74%", width: "21%" }, { duration: 550 });
            $("#imgBack4").animate({ left: "0px", width: "100%" }, { duration: 700 });
            $("#name4").animate(
                { left: "0px", width: "96%", opacity: "1.0" },
                { duration: 900 }
            );
            $("#sourcingFunds").hide();
        } else if (whichSelected === "Null") {
            window.location.href = "../../index.html"
        }
    });
});
