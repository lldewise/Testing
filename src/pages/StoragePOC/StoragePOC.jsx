import React, { useState, useEffect, useRef } from 'react';
import { useSessionStorage } from 'react-use';
import { Base_URL } from '../../environment';
import axios from '../../services/api';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import JoditEditor from "jodit-react";
import DraftRichEditor from '../../components/richtexteditor/draft/RichTextEditor';
import { Link } from '@fluentui/react';


const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike' ],
        ['blockquote','code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video', 'formula'],
        ['clean'], [{ 'header': 1 }], [{ 'header': 2 }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }],
        [ { 'background': [] }],
        [{ 'font': [] }],
        [{'align':[]}]
    ],
}

const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote','code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'header','video','formula','clean','color','background','align'
]

export default function StoragePOC() {
    const [value, setValue] = useSessionStorage('my-key', 'foo');
    const [localstorage, setlocalstorage] = useState("");
    const [isNavCollapsed, setisNavCollapsed] = useState(false);
    const [quill] = useState("");

    const locaStorageHandler = (value) => {
        localStorage.setItem('myLocalStorage', value);
        setlocalstorage(localStorage.getItem('myLocalStorage'));
    }

    const togglebar = () => {
        debugger
        const navtoggler = isNavCollapsed ? 'false' : 'true'
        localStorage.setItem('NavToggler.isNavCollapsed', navtoggler);
        setisNavCollapsed(navtoggler);
    }


    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const handleChange = () => {

    }

    const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    return (
        <div className="ms-Grid-row ">
            <br/>
            <div>
            <label style={{fontSize:"20px", fontWeight:"bold"}}><Link href='https://draftjs.org/'> Draft.JS (Open source)</Link></label>
                <DraftRichEditor/>
            </div>
            <br/>
            <label style={{fontSize:"20px", fontWeight:"bold"}}><Link href='https://quilljs.com/'>Quill JS (Open source)</Link></label>
            <div className="ms-Grid-col ms-lg12 container">
            </div>

            <div>
                <ReactQuill value={quill}

                    theme="snow"
                    modules={modules}
                    formats={formats}
                    onChange={handleChange} />
            </div>
            <br/>
            
            <div>
            <label style={{fontSize:"20px", fontWeight:"bold"}}> <Link href="https://xdsoft.net/jodit/">Jodit (Open source) </Link> </label>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
            </div>

        </div>
        
    );
}
