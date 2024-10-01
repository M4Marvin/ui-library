import React from 'react';

const H1 = (props: string[]) => <h1 className="text-4xl font-bold mb-4" {...props} />;
const H2 = (props: string[]) => <h2 className="text-3xl font-semibold mb-3" {...props} />;
const H3 = (props: string[]) => <h3 className="text-2xl font-medium mb-2" {...props} />;
const P = (props: string[]) => <p className="text-base mb-4" {...props} />;
const Ul = (props: string[]) => <ul className="list-disc list-inside mb-4" {...props} />;
const Ol = (props: string[]) => <ol className="list-decimal list-inside mb-4" {...props} />;
const Li = (props: string[]) => <li className="mb-1" {...props} />;

const MDXComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    // Add more components as needed
};

export default MDXComponents;