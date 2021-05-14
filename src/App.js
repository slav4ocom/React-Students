'use strict';


class Main extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <br />
                <Page />
            </div>
        );
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a onClick={() => SetPage('Home')} >Home</a></li>
                    <li><a onClick={() => SetPage('Students')} >Students</a></li>
                    <li><a onClick={() => SetPage('Homeworks')} >Homeworks</a></li>
                    <li><a onClick={() => SetPage('About')} >About</a></li>
                </ul>
            </div>
        );
    }
}

var page = "Home";



function SetPage(pagename) {
    page = pagename;

    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );

}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }



    render() {

        switch (page) {
            case "Home":
                return (<Home />);
                break;

            case "Students":
                return (<Students />);
                break;

            case "Homeworks":
                return (<Homeworks />);
                break;

            case "About":
                return (<About />);
                break;
            default:
                return (
                    <div>
                        No page
                    </div>
                );
        }



    }
}


function loadDoc(documentName, returnObject) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 304)) {
            //document.getElementById(elementId).innerHTML = this.responseText;
            //tablica = "return from loadDoc()";
            //tablica = this.responseText;
            returnObject.value = this.responseText;
        }
    }
    xhttp.open("GET", documentName, false);
    xhttp.send();

}

class Home extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <h1>
                        Welcome to Web students React platform !
                    </h1>
                </center>
            </div>
        );
    }
}

var studentsTable = {
    value: ""
};

class Students extends React.Component {

    render() {
        loadDoc("students.txt", studentsTable);
        return (
            <div>
                This is students
                <br />
                {studentsTable.value}
            </div>
        );
    }
}

var tablica = {
    value: "таблица"
};
//tablica = "dsadsadsasda";

class Homeworks extends React.Component {
    render() {
        //loadDoc("homeworks", "homeworksTable");
        loadDoc("homeworks", tablica);
        return (
            <div>
                This is homeworks
                <br />
                {tablica.value}
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                This project is created by slav4o.com for online working with students.
            </div>
        );
    }
}

class Reakciq extends React.Component {
    render() {
        return (
            <div>
                реактваш ли, реактваш ли дядо попе ?
            </div>
        );
    }
}

//var t = document.createElement("div");
//t.setAttribute("id","homeworksTable");
////t.id = "homeworksTable";
//document.getElementById("root").appendChild(t);
//document.getElementById("homeworksTable").innerHTML = "<h3>opala...</h3>";
