const Footer = () => {
    const today = new Date();
    console.log('Footer componenta');
    return (
        <footer className='footer1'>
            <div class="copyright">Copyright &copy; {today.getFullYear()} made by <a href="https://github.com/tala-coder"  >Muhammed Talić</a> .</div>
            
            
        </footer>
    )
}

export default Footer 