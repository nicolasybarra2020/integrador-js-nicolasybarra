const pokedinos=[
    {
        id: 1,
        name: "Parasaurolophus",
        category:'Herbivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Parasaurolophus is recognized by its distinctive crest on top of its head. It lived during the Late Cretaceous period and was a herbivorous dinosaur that likely used its crest for communication.",
        image: "assets/parasaurolophus.jpg",
        price:'0.1 ETH'
    },
    {
        id: 2,
        name: "Tyrannosaurus Rex",
        category:'Carnivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Other dinosaurs", "Small animals"],
        description: "The Tyrannosaurus Rex, often called T. Rex, is one of the most famous dinosaurs. It was a large carnivorous dinosaur that lived during the Late Cretaceous period. With its powerful jaws and sharp teeth, it was a fearsome predator.",
        image: 'assets/tyrannosaurus.jpg',
        price:'0.3 ETH'
    },
    {
        id: 3,
        name: "Iguanodon",
        category:'Herbivore',
        period: "Early Cretaceous",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Iguanodon was an early herbivorous dinosaur that lived during the Early Cretaceous period. It had a thumb spike that likely served various purposes.",
        image: "assets/iguanodon.jpg",
        price:'0.045 ETH'
    },
    {
        id: 4,
        name: "Velociraptor",
        category:'Carnivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Small animals", "Other dinosaurs"],
        description: "The Velociraptor is a small to medium-sized dinosaur known for its sharp claws and speed. It lived during the Late Cretaceous period and was an agile predator that hunted in packs.",
        image: "assets/velociraptor.jpg",
        price:'0.1 ETH'
    },
    {
        id: 5,
        name: "Triceratops",
        category:'Herbivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Triceratops is a well-known dinosaur with three distinctive facial horns. It lived during the Late Cretaceous period and was a herbivorous dinosaur that fed on plants.",
        image: "assets/triceratops.jpg",
        price:'0.1 ETH'
    },
    {
        id: 6,
        name: "Stegosaurus",
        category:'Herbivore',
        period: "Late Jurassic to Early Cretaceous",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Stegosaurus is recognized by its double row of large plates along its back and spikes on its tail. It lived during the Late Jurassic to Early Cretaceous period and was a herbivore.",
        image: "assets/stegosaurus.jpg",
        price:'0.2 ETH'
    },
    
    {
        id: 7,
        name: "Spinosaurus",
        category:'Carnivore',
        period: "Cretaceous",
        habitat: "Aquatic",
        diet: ["Fish", "Other dinosaurs"],
        description: "The Spinosaurus is a massive dinosaur with a sail-like structure on its back. It primarily lived in aquatic environments and is thought to have been a proficient fish hunter.",
        image: "assets/spinosaurus.jpg",
        price:'0.9 ETH'
    },
    {
        id: 8,
        name: "Allosaurus",
        category:'Carnivore',
        period: "Late Jurassic",
        habitat: "Land",
        diet: ["Other dinosaurs", "Small animals"],
        description: "The Allosaurus was a large theropod dinosaur that roamed the earth during the Late Jurassic period. It was a powerful predator with sharp teeth and claws.",
        image: "assets/Allosaurus2.jpg",
        price:'0.3 ETH'
    },
    {
        id: 9,
        name: "Carcharodontosaurus",
        category:'Carnivore',
        period: "Cretaceous",
        habitat: "Land",
        diet: ["Other dinosaurs", "Large animals"],
        description: "The Carcharodontosaurus was a massive predator that lived during the Cretaceous period. It had serrated teeth similar to those of a shark and was one of the top predators of its time.",
        image: "assets/Carcharodontosaurus.jpg",
        price:'2 ETH'
    },
    {
        id: 10,
        name: "Brachiosaurus",
        category:'Herbivore',
        period: "Jurassic",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Brachiosaurus was a massive dinosaur with a long neck and a relatively small head. It lived during the Jurassic period and was a herbivorous dinosaur that fed on tall plants.",
        image: "assets/Brachiosaurus.jpg",
        price:'0.12 ETH'
    },
    {
        id: 11,
        name: "Giganotosaurus",
        category:'Carnivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Other dinosaurs", "Large animals"],
        description: "The Giganotosaurus was one of the largest theropod dinosaurs, living during the Late Cretaceous period. It had sharp teeth and was a formidable predator in its ecosystem.",
        image: "assets/Giganotosaurus.jpg",
        price:'0.01 ETH'
    },
    {
        id: 12,
        name: "Ankylosaurus",
        category:'Herbivore',
        period: "Late Cretaceous",
        habitat: "Land",
        diet: ["Plants", "Vegetation"],
        description: "The Ankylosaurus had a heavily armored body and a club-like tail. It lived during the Late Cretaceous period and was a herbivorous dinosaur that used its armor for defense.",
        image: "assets/Ankylosaurus.jpg",
        price:'0.1 ETH'
    },
    {
        id: 13,
        name: "Pteranodon",
        category: "Flier",
        period: "Late Cretaceous",
        habitat: "Sky",
        diet: ["Fish", "Small animals"],
        description: "The Pteranodon was a flying reptile rather than a dinosaur, with a large wingspan. It lived during the Late Cretaceous period and was a carnivorous creature that likely hunted for fish.",
        image: "assets/pteranodon.jpg",
        price:'1.1 ETH'
    },
    {
        id: 14,
        name: "Quetzalcoatlus",
        category: "Flier",
        period: "Late Cretaceous",
        habitat: "Sky",
        diet: ["Small animals", "Other dinosaurs"],
        description: "The Quetzalcoatlus was one of the largest flying creatures to ever exist. It lived during the Late Cretaceous period and was a carnivorous pterosaur.",
        image: "assets/quetzalcoatlus.jpg",
        price:'0.9 ETH'
    },
    {
        id: 15,
        name: "Dimorphodon",
        category: "Flier",
        period: "Early Jurassic",
        habitat: "Sky",
        diet: ["Fish", "Small animals"],
        description: "The Dimorphodon was a small flying reptile with a unique double-crested skull. It lived during the Early Jurassic period and was likely a carnivorous feeder.",
        image: "assets/dimorphodon.jpg",
        price:'0.011 ETH'
    },
    {
        id: 16,
        name: "Rhamphorhynchus",
        category: "Flier",
        period: "Late Jurassic",
        habitat: "Sky",
        diet: ["Fish", "Small animals"],
        description: "The Rhamphorhynchus was a small pterosaur with a long tail. It lived during the Late Jurassic period and is believed to have been a carnivore that hunted fish.",
        image: "assets/Rhamphorhynchus.jpg",
        price:'0.12 ETH'
    },
    {
        id: 17,
        name: "Pterodactylus",
        category: "Flier",      
        period: "Late Jurassic",
        habitat: "Sky",
        diet: ["Fish", "Small animals"],
        description: "The Pterodactylus was a small pterosaur with a wingspan and a sharp beak. It lived during the Late Jurassic period and was likely a carnivorous feeder.",
        image: "assets/Pterodactylus.jpg",
        price:'0.13 ETH'
    },
    {
        id: 18,
        name: "Sordes",
        category: "Flier",   
        period: "Late Jurassic",
        habitat: "Sky",
        diet: ["Small animals", "Insects"],
        description: "The Sordes was a small pterosaur that lived during the Late Jurassic period. It had a bat-like wing structure and was a carnivorous creature.",
        image: "assets/Sordes.jpg",
        price:'0.29 ETH'
    },
    {
        id: 19,
        name: "Mosasaurus",
        category: "Aquatic",  
        period: "Late Cretaceous",
        habitat: "Water",
        diet: ["Fish", "Other marine animals"],
        description: "The Mosasaurus was a massive marine reptile that lived during the Late Cretaceous period. It was a powerful predator of the oceans, preying on fish and other marine creatures.",
        image: "assets/mosasaurus.jpg",
        price:'0.19 ETH'
    },
    {
        id: 20,
        name: "Plesiosaurus",
        category: "Aquatic",   
        period: "Jurassic to Cretaceous",
        habitat: "Water",
        diet: ["Fish", "Other aquatic animals"],
        description: "The Plesiosaurus was a long-necked marine reptile that lived during the Jurassic to Cretaceous periods. It had a unique appearance and fed on fish and other aquatic creatures.",
        image: "assets/plesiosaurus.jpg",
        price:'0.11 ETH'
    },
    {
        id: 21,
        name: "Ichthyosaurus",
        category: "Aquatic",
        period: "Triassic to Early Cretaceous",
        habitat: "Water",
        diet: ["Fish", "Other marine animals"],
        description: "The Ichthyosaurus was a dolphin-like marine reptile that lived during the Triassic to Early Cretaceous periods. It was a fast swimmer and fed on fish and marine creatures.",
        image: "assets/Ichthyosaurus.jpg",
        price:'0.01 ETH'
    },
    {
        id: 22,
        name: "Elasmosaurus",
        category: "Aquatic",       
        period: "Late Cretaceous",
        habitat: "Water",
        diet: ["Fish", "Other marine animals"],
        description: "The Elasmosaurus had an extremely long neck and lived during the Late Cretaceous period. It was a marine reptile that fed on fish and other marine life.",
        image: "assets/elasmosaurus.jpg",
        price:'0.1 ETH'
    },
    {
        id: 23,
        name: "Liopleurodon",
        category: "Aquatic",      
        period: "Jurassic",
        habitat: "Water",
        diet: ["Fish", "Other marine animals"],
        description: "The Liopleurodon was a large marine reptile that lived during the Jurassic period. It was an apex predator of the oceans, known for its powerful jaws and large size.",
        image: "assets/Liopleurodon.jpg",
        price:'0.2 ETH'
    },
    {
        id: 24,
        name: "Kronosaurus",
        category: "Aquatic",    
        period: "Early Cretaceous",
        habitat: "Water",
        diet: ["Fish", "Other marine animals"],
        description: "The Kronosaurus was a massive marine reptile that lived during the Early Cretaceous period. It was a formidable predator of the ancient oceans.",
        image: "assets/Kronosaurus.jpg",
        price:'0.1 ETH'
    }
]


const divideProductInParts=(size)=>{
    const pokeProducts=[]
    for(let i=0;i<pokedinos.length;i+=size){
        pokeProducts.push(pokedinos.slice(i,i+size))
    }
    return pokeProducts
}


const appState={
    products:divideProductInParts(6),
    currentProductsIndex:0,
    productsLimit:divideProductInParts(6).length,
    activeFilter:null
}