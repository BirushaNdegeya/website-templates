import { useState } from "react";
import Footer from "./footer";
import TemplateGallery from "./template-gallery";
import CategoryMenu from "./category-menu";
import { Iframe } from "./hello";

const categories = [
  "Tous",
  "Business",
  "E-commerce",
  "Portfolio",
  "Blog",
  "Landing Page"
];

const templates = [
  {
    id: 1,
    title: "Aroma Spa",
    description: "Template élégant pour spa et bien-être",
    category: "Business",
    imageUrl: "/templates/aroma/preview.jpg",
    demoUrl: "/templates/aroma/index.html"
  },
  {
    id: 2,
    title: "Modern Shop",
    description: "Template e-commerce moderne et réactif",
    category: "E-commerce",
    imageUrl: "/templates/modern-shop/preview.jpg",
    demoUrl: "#"
  },
  // ... autres templates
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const filteredTemplates = selectedCategory === "Tous"
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  const template = [
    '/templates/profile-card/index.html',
    '/templates/community/index.html',
    '/templates/colum-preview/index.html',
    '/templates/qr-code-component/index.html',
  ]
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {template.map((template, index) => (
        <Iframe key={index} templateLink={template} />
      ))}
    </div>
  )
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Galerie de Templates Premium
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection de templates professionnels et modernes
          </p>
        </section>

        <CategoryMenu
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <TemplateGallery
          templates={filteredTemplates}
          onSelect={setSelectedTemplate}
        />

        {selectedTemplate && (
          <div className="mt-8">
            <Iframe template={selectedTemplate} />
          </div>
        )}
      </main>
      <Hello />
      <Footer />
    </div>
  );
}

export default App;
