import './App.css'
import Grandpa from './components/GrandPa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import Hookform from './components/HookForm/Hookform'
// import REfForm from './components/RefForm/REfForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSingUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update profile', data);
  // }

  return (
    <>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <REfForm></REfForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing UP</h2>
            <p>please sign up right now</p>
          </div>
        </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm> */}
    </>
  )
}

export default App
