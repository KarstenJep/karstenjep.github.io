import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import js from "./images/js.png";
import reactAv from "./images/react.png";
import nodeAv from "./images/node.png";
import postgresql from "./images/postgresql.png";
import pythonAv from "./images/python.png";
import htmlAv from "./images/html.png";
import cssAv from "./images/css.png";
import gitAv from "./images/git.png";

export default function TechStack() {

    const [javascript, setJavascript] = useState(false);
    const [node, setNode] = useState(false);
    const [sql, setSql] = useState(false);
    const [postgres, setPostgres] = useState(false);
    const [css, setCss] = useState(false);
    const [html, setHtml] = useState(false);
    const [git, setGit] = useState(false);
    const [python, setPython] = useState(false);

    const [react, setReact] = useState(false);
    const [jquery, setJquery] = useState(false);
    const [saga, setSaga] = useState(false);
    const [redux, setRedux] = useState(false);
    const [express, setExpress] = useState(false);
    const [ajax, setAjax] = useState(false);
    const [mui, setMui] = useState(false);
    const [passport, setPassport] = useState(false);


    return (
        <>
        <div className="chips">
        <Stack spacing={1} alignItems="center" >
            <Stack direction="row" spacing={1}>
                <Chip 
                    label="JavaScript" 
                    color="success" 
                    size={javascript ? "big" : "medium"}
                    variant={javascript ? "outlined" : "filled"}
                    avatar={<Avatar alt="js" src={js} />}
                    onClick={() => setJavascript(!javascript)}/>
                <Chip 
                    label="SQL" 
                    color="primary" 
                    variant={sql ? "outlined" : "filled"}
                    onClick={() => setSql(!sql)}/>
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
                    label="Git" 
                    color="error"
                    avatar={<Avatar alt="G" src={gitAv} />}
                    variant={git ? "outlined" : "filled"}
                    onClick={() => setGit(!git)}/>
                <Chip 
                    label="Python" 
                    color="primary"
                    avatar={<Avatar alt="P" src={pythonAv} />}
                    variant={python ? "outlined" : "filled"}
                    onClick={() => setPython(!python)}/>
            </Stack>

            <Stack direction="row" spacing={1}>
                <Chip 
                    label="React" 
                    color="secondary" 
                    avatar={<Avatar alt="P" src={reactAv} />}
                    variant={react ? "filled" : "outlined"}
                    onClick={() => setReact(!react)}/>
                <Chip 
                    label="jQuery" 
                    color="success" 
                    variant={jquery ? "filled" : "outlined"}
                    onClick={() => setJquery(!jquery)}/>
                <Chip 
                    label="Saga" 
                    color="primary" 
                    variant={saga ? "filled" : "outlined"}
                    onClick={() => setSaga(!saga)}/>
                <Chip 
                    label="Redux" 
                    color="success" 
                    variant={redux ? "filled" : "outlined"}
                    onClick={() => setRedux(!redux)}/>
                <Chip 
                    label="Express" 
                    color="primary" 
                    variant={express ? "filled" : "outlined"}
                    onClick={() => setExpress(!express)}/>
                <Chip 
                    label="AJAX" 
                    color="success" 
                    variant={ajax ? "filled" : "outlined"}
                    onClick={() => setAjax(!ajax)}/>
                <Chip 
                    label="Material-UI" 
                    color="primary" 
                    variant={mui ? "filled" : "outlined"}
                    onClick={() => setMui(!mui)}/>
                <Chip 
                    label="Passport" 
                    color="success" 
                    variant={passport ? "filled" : "outlined"}
                    onClick={() => setPassport(!passport)}/>
            </Stack>
        </Stack>
    </div>
    </>
    )
}