/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  // dummy data
  await knex('books').insert([
    {title: 'No sweetness here', author: "Ama Ata Aidoo", description: "Ama Ata Aidoo is a native of Ghana, Wet Africa, where she has been Minister of Education and an activist for human rights, women's rights, and African unity. One of Africa's most distinguished writers, she is the author of fiction, poetry, drama, essays, and political and cultural commentary."},
    {title: 'The lemon suitcase', author: "Peggy Oppong", description: "Her brow was beaded with sweat and her heart was thumping furiously with fear as she watched the gunman standing in front of her, with only a desk separating them. Mabena felt trapped and her night caller knew it."},
    {title: 'No Roses for Sharon', author: "Peggy Oppong"},
  ]);
};
