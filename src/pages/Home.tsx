function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <nav className="mt-4 flex justify-center">
        <div>Ponderly</div>
      </nav>

      <main className="mx-4 flex flex-1 items-center justify-center">
        <section className="flex h-50 w-70 flex-col items-center justify-center gap-4 bg-amber-300">
          <div className="text-xl">Category</div>
          <div className="text-4xl">Question</div>
          <div>Bottom text</div>
        </section>
      </main>

      <footer className="mb-4 flex justify-center">
        <div>Mayde by Dj</div>
      </footer>
    </div>
  );
}

export default Home;
