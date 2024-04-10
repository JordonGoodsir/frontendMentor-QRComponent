
function App() {
  return (
    <main className="h-screen w-screen bg-[#D5E1EF] flex items-center justify-center">
    
      <section className="flex flex-col bg-white rounded-[20px] p-[16px] w-[320px]">
        <img src="/image-qr-code.png" className="rounded-[10px]" />

        <div className="flex flex-col py-[24px] text-center items-center px-[16px] gap-[16px]">
          <p className="font-['Outfit'] text-[#1F314F] font-bold text-[22px]">Improve your front-end skills by building projects</p>
          <p className="font-['Outfit'] text-[#7D889E] text-[15px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>

    </main>
  )
}

export default App
