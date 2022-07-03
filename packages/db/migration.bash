# fullname="USER INPUT"
read -p "Enter Migration Name: " name
# user="USER INPUT"
echo "$name"
yarn typeorm migration:create src/migrations/$name
