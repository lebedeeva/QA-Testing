/**
 * Logical (&&, ||, !)
 * 
 * && -> and-operator
 *      All combined conditions must be true to get final result as tru
 *      if any one of the combined conditions is false, the finela result is false
 * || -> or-operator
 *      Only one of the combined conditions must be true, to get result "true"
 *      if all the combined conditions are false, the result will be false
 * !  -> not-operator
 * 
 */

let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40

/**
 * lVar1 is greater than lVar3 and lVar2 is not equal to lVar4
 * 
 * Lvar1 > lVar3 && lVar2 !== lVar4
 * 
 * false && true = false
 * 
 * age = 20
 * state = NY
 * ever gone to school = no
 * 
 * if age > 21 and lives in NY -> college discount is 10
 * 
 * if age > 21 or lives in NY or went to school -> college discount is 10
 * 
 */

let lRes1 = lVar1 <= lVar3 && lVar2 === lVar3 + lVar4
        /*
            10<= 30 && 20 === 30+40
            true && 20 === 70
            true && false
            false
        */
console.log (`lRes1 -> ${lRes1}`)

lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4)
        /*
            10<= 30 && !(20 === 30+40)
            true && !(20 === 70)
            true && !(false)
            true
        */
console.log (`lRes1 -> ${lRes1}`)
