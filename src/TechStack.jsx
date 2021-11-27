import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import js from "./images/js2.png";
import reactAv from "./images/react.png";
import nodeAv from "./images/node.png";
import postgresql from "./images/postgresql.png";
import pythonAv from "./images/python.png";
import htmlAv from "./images/html.png";
import cssAv from "./images/css.png";
import gitAv from "./images/git.png";
import sqlAv from "./images/sql.png";
import jqueryAv from "./images/jquery.png";
import muiAv from "./images/mui.svg";
import postmanAv from "./images/postman.png";
import passportAv from "./images/passport.png";
import rs from "./images/redux-saga.svg";
import r from "./images/redux.svg";
import ts from "./images/typescript.png"

export default function TechStack() {

    // Languages
    const [javascript, setJavascript] = useState(false);
    const [node, setNode] = useState(false);
    const [sql, setSql] = useState(false);
    const [postgres, setPostgres] = useState(false);
    const [css, setCss] = useState(false);
    const [html, setHtml] = useState(false);
    const [git, setGit] = useState(false);
    const [python, setPython] = useState(false);
    const [typescript, setTypescript] = useState(false);

    // Frameworks / Libraries / Tools
    const [react, setReact] = useState(false);
    const [jquery, setJquery] = useState(false);
    const [saga, setSaga] = useState(false);
    const [redux, setRedux] = useState(false);
    const [express, setExpress] = useState(false);
    const [ajax, setAjax] = useState(false);
    const [mui, setMui] = useState(false);
    const [passport, setPassport] = useState(false);
    const [postman, setPostman] = useState(false);


    return (
        <>
        <div className="chips">
        <Stack spacing={1} alignItems="center" >
            <Stack direction="row" spacing={1}>
                <Chip 
                    label="HTML" 
                    color="error"
                    avatar={<Avatar alt="H" src={htmlAv} />}
                    variant={html ? "outlined" : "filled"}
                    onClick={() => setHtml(!html)}/>
                <Chip 
                    label="CSS" 
                    color="primary"
                    avatar={<Avatar alt="C" src={cssAv} />}
                    variant={css ? "outlined" : "filled"}
                    onClick={() => setCss(!css)}/>
                <Chip 
                    label="JavaScript" 
                    color="success" 
                    style={{ fontSize: javascript ? "2vh" : "", fontWeight: javascript ? 'bold' : ''}}
                    variant={javascript ? "outlined" : "filled"}
                    avatar={<Avatar alt="js" src={js} />}
                    onClick={() => setJavascript(!javascript)}/>
                <Chip 
                    label="Node" 
                    color="success" 
                    avatar={<Avatar alt="N" src={nodeAv} />}
                    variant={node ? "outlined" : "filled"}
                    onClick={() => setNode(!node)}/>
                <Chip 
                    label="PostrgreSQL" 
                    color="primary" 
                    avatar={<Avatar alt="P" src={postgresql} />}
                    variant={postgres ? "outlined" : "filled"}
                    onClick={() => setPostgres(!postgres)}/>
                <Chip 
                    label="SQL" 
                    color="success"
                    avatar={<Avatar alt="S" src={sqlAv} />}
                    variant={sql ? "outlined" : "filled"}
                    onClick={() => setSql(!sql)}/>
                <Chip 
                    label="Python" 
                    color="primary"
                    avatar={<Avatar alt="P" src={pythonAv} />}
                    variant={python ? "outlined" : "filled"}
                    onClick={() => setPython(!python)}/>
                <Chip 
                    label="Typescript" 
                    color="primary"
                    avatar={<Avatar alt="T" src={ts} />}
                    variant={typescript ? "outlined" : "filled"}
                    onClick={() => setTypescript(!typescript)}/>
                <Chip 
                    label="Git" 
                    color="error"
                    avatar={<Avatar alt="G" src={gitAv} />}
                    variant={git ? "outlined" : "filled"}
                    onClick={() => setGit(!git)}/>
            </Stack>

            <Stack direction="row" spacing={1}>
                <Chip 
                    label="React" 
                    color="secondary" 
                    avatar={<Avatar alt="P" src={reactAv} />}
                    variant={react ? "outlined" : "filled"}
                    onClick={() => setReact(!react)}/>
                <Chip 
                    label="jQuery" 
                    color="primary"
                    avatar={<Avatar alt="J" src={jqueryAv} />}
                    variant={jquery ? "outlined" : "filled"}
                    onClick={() => setJquery(!jquery)}/>
                <Chip 
                    label="Redux" 
                    color="secondary" 
                    avatar={<Avatar alt="R" src={r} />}
                    variant={redux ? "outlined" : "filled"}
                    onClick={() => setRedux(!redux)}/>
                 <Chip 
                    label="Saga" 
                    color="primary"
                    avatar={<Avatar alt="S" src={rs} />}
                    variant={saga ? "outlined" : "filled"}
                    onClick={() => setSaga(!saga)}/>
                <Chip 
                    label="Express" 
                    color="primary"
                    variant={express ? "outlined" : "filled"}
                    onClick={() => setExpress(!express)}/>
                <Chip 
                    label="AJAX" 
                    color="success"
                    variant={ajax ? "outlined" : "filled"}
                    onClick={() => setAjax(!ajax)}/>
                <Chip 
                    label="Material-UI" 
                    color="primary"
                    avatar={<Avatar alt="M" src={muiAv} />}
                    variant={mui ? "outlined" : "filled"}
                    onClick={() => setMui(!mui)}/>
                <Chip 
                    label="Passport" 
                    color="success"
                    avatar={<Avatar alt="P" src={passportAv} />}
                    variant={passport ? "outlined" : "filled"}
                    onClick={() => setPassport(!passport)}/>
                <Chip 
                    label="Postman" 
                    color="error"
                    avatar={<Avatar alt="P" src={postmanAv} />}
                    variant={postman ? "outlined" : "filled"}
                    onClick={() => setPostman(!postman)}/>
            </Stack>
        </Stack>
    </div>
    </>
    )
}