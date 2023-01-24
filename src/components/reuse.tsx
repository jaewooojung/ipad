function Section({ size, children }: { size: number; children: React.ReactNode }) {
  return (
    <section
      className="w-screen"
      style={{
        height: `${size}00vh`,
      }}
    >
      {children}
    </section>
  );
}

function StickyScreen({ children }: { children: React.ReactNode }) {
  return <div className="sticky inset-0 w-screen h-screen">{children}</div>;
}

export { Section, StickyScreen };
