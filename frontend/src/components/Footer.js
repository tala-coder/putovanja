const Footer = () => {
    const today = new Date();
    console.log('Footer componenta');
    return (
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
