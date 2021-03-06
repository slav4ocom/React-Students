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

var tableData = [];

function loadDoc(documentName, returnObject, updateElement) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 304)) {
            returnObject.value = this.responseText;
            //tablica.value = JSON.parse(this.responseText).recordset[0].Id;
            tablica.value = JSON.parse(this.responseText).recordset;
            for (var i = 0; i < 10; i++) {
                tableData.push(tablica.value[i].Id);

            }
            document.getElementById(updateElement).innerHTML = tablica.value[0];
            

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
    value: "??????????????"
};
//tablica = "dsadsadsasda";


function FillTable() {
    for (var i = 0; i < 10; i++) {

    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>column 1</td>
                <td>column 2</td>
                <td>column 3</td>
                <td>column 4</td>
            </tr>
        );
    }
}


function AddRowsData() {
    for (var i = 0; i < 10; i++) {
        document.getElementById("tableBody").appendChild(new TableRow().render());
    }
}



class Homeworks extends React.Component {
    render() {
        var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

        const homeWorksElement = "homeworksDiv";
        loadDoc("homeworks", tablica, homeWorksElement);
        return (
            <div>
                ??????????????
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>????????????</th>
                            <th>??????????????</th>
                            <th>??????????????</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                    </tbody>


                </table>
                
                <div id={homeWorksElement}>
                    This is homeworks
                <br />
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
                ???????????????? ????, ???????????????? ???? ???????? ???????? ?
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
