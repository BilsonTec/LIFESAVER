// @ts-nocheck
// Fonction pour afficher ou masquer les champs en fonction du type de compte sélectionné
function updateForm() {
  const typeCompte = document.querySelector('input[name="type_compte"]:checked').value;
  const urgenceFields = document.getElementById("urgence-fields");
  const patientFields = document.getElementById("patient-fields");

  // Si le type de compte est "Urgences", afficher les champs urgences et masquer ceux du patient
  if (typeCompte === "urgences") {
      urgenceFields.style.display = "block";
      patientFields.style.display = "none";
  } else {
      // Sinon, afficher les champs pour le patient et masquer ceux des urgences
      urgenceFields.style.display = "none";
      patientFields.style.display = "block";
  }
}