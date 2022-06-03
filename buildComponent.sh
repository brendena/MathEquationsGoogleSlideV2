#!/bin/bash
echo "building Math Equation component"

cd MathEquations-component

npm run build

mv build/direflowBundle.js ../Math_Equation_Component.html

cd ..

sed -i '1s/^/<script>/' Math_Equation_Component.html
echo -e "\n</script>" >> Math_Equation_Component.html

