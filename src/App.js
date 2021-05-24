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


function loadDoc(documentName, returnObject, updateElement) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 304)) {
            returnObject.value = this.responseText;
            document.getElementById(updateElement).innerHTML = this.responseText;

        }
    }
    xhttp.open("GET", documentName, true);
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

function GetArray() {
    //var json = tablica.value;
    var json = '{"proba": "rezultat", "proba2": "rezultat2"}';
    var obj = JSON.parse(json);
    var res = [];
    for (var i in obj) {
        res.push(obj[i]);
    }
    return res;
    //return tablica.value;
}
class Students extends React.Component {
    render() {
        const studentsElement = "studentsDiv";
        loadDoc("students.txt", studentsTable, studentsElement);
        return (
            <div id={studentsElement}>
                This is students
                <br />
                {studentsTable.value}
                <br />
                {GetArray()}
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
        const homeWorksElement = "homeworksDiv";
        loadDoc("homeworks", tablica, homeWorksElement);
        return (
            <div>
                курец
                <table>
                    <th>No.</th>
                    <th>Ученик</th>
                    <th>Занятие</th>
                    <th>Домашно</th>
                </table>
                <div id={homeWorksElement}>
                    This is homeworks
                <br />
                    {tablica.value}
                </div>
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

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
