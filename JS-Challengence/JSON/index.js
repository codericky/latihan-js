let mahasiswa = {
    namalengkap: "Isi nama masing2",
    tahun: 2023,
  
  toString() {
      return `{namalengkap: "${this.namalengkap}", 
              tahun: ${this.tahun}}`;
    }


  };
  console.log(mahasiswa);




  // {namalengkap: "Ricky Noviansyah", tahun: 2022}

// let student = {
//     namalengkap: "Ricky Noviansyah",
//     jurusan: "Teknik Informatika",
//     matkul: ["Design Grafis", "Programming", "Networking", "Linux", "Entreprenur"],
//     kampus: "Areta Informatics College"
//   };
  
//   let json = JSON.stringify(student);
    
//   console.log(json);