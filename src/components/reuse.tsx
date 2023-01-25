function Section({ size, children }: { size: number; children: React.ReactNode }) {
  return (
    <section
      className="w-full"
      style={{
        height: `${size * 100}vh`,
      }}
    >
      {children}
    </section>
  );
}

function StickyScreen({ children }: { children: React.ReactNode }) {
  return <div className="sticky top-0 w-full h-screen">{children}</div>;
}

export { Section, StickyScreen };
