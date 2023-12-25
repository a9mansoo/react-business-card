import Toggle from 'react-toggle'



function DarkModeToggle({onChange, darkMode}){
    return (<label>
                <Toggle
                  defaultChecked={darkMode}
                  onChange={onChange}/>
                <span>{darkMode ? "Disable" : "Enable"} Dark Mode</span>
              </label>);
}


export default DarkModeToggle;
