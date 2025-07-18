

  children: React.ReactNode;''';
  className?: string;''';
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6''';
};''';
  children,;''';
  className,;''';
  level = 'h2',''';
  const Tag: unknown = level;''';
''';
    <Tag;''';
      className={cn(;''';
        'text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent',;''';
        'font-heading leading-tight',;''';
        'text-transparent supports-[not(background-clip:text)]:text-foreground',''';
      )};''';
      style={{;''';
        minHeight: '1.2em',;''';
        contain: 'layout style',;''';
        willChange: 'auto',''';
      {children};''';
    </Tag>''';
};''';
}''';
}''';
