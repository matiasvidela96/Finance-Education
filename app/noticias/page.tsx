'use client'


export default function Noticias() {

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/noticias', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 justify-center" >
        <div className="py-12 md:py-20 justify-center">
          <div>
            <form onSubmit={onSubmit}>
              <button className="mt-28">
                send api
              </button>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}