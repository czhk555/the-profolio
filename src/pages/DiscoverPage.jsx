import Header from "../components/Header"

function DiscoverPage(props) {
    // eslint-disable-next-line react/prop-types
    const {toggleTheme,theme} = props
  return (
    <div className=" bg-background dark:bg-backgroundDark text-textPrimary dark:text-textPrimaryDark">
    <Header toggleTheme={toggleTheme} theme={theme} flagSignIn={false} user={true} currentPage={"Discover"}/>
        <div className=" px-6 md:px-16 h-screen" >
        Discover
        </div>
    </div>
  )
}

export default DiscoverPage