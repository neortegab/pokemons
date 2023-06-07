const regex = /[a-zA-Z0-9!@#$%^&*()_+-={}|:<>?,.;]/;

export default function validateInfo(values) {
  let errors = {};

  const { name, hp, attack, defense, speed, height, weight, types } = values;

  const keys = Object.keys(values);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key === "speed" || key === "height" || key === "weight") continue;

    if (!values[key]) {
      errors[key] = `The value ${key} can't be empty!`;
    }
  }

  if (name && regex.test(name))
    errors.name = `The name can't contain special characters or numbers`;
  if (name.length > 30)
    errors.name = `The name can't be longer than 30 characters`;
  if (parseInt(hp) > 106 && parseInt(hp) < 1)
    errors.hp = `The life of your Pokemon can't be greater than 106 nor less than 1`;
  if (parseInt(attack) > 190 && parseInt(attack) < 4)
    errors.attack = `The attack of your Pokemon can't be greater than 185 nor less than 4`;
  if (parseInt(defense) > 230 && parseInt(defense) < 4)
    errors.defense = `The defense of your Pokemon can't be greater than 185 nor less than 4`;
  if (parseInt(speed) < 0)
    errors.speed = `The speed of your Pokemon can't be less than 0`;
  if (parseInt(height) < 0)
    errors.height = `The height of your Pokemon can't be less than 0`;
  if (parseInt(weight) < 0)
    errors.weight = `The weight of your Pokemon can't be less than 0`;
  if (types && types.length < 2)
    errors.types = `You must select at least 2 types for your Pokemon`;

  return errors;
}
