export const convertToKiller = ({
  _id,
  name,
  imgs: { portrait, store },
  perks_ids,
  power,
  code
}) => ({
  name,
  portrait,
  store,
  perks_ids,
  power,
  id: _id,
  code
})
