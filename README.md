# window-crypto

This is a `window.crypto` polyfill based on ChaCha20 stream cipher.

Some libraries out there require `window.crypto`, but there are still browsers that don't have it. React Native environment also lacks this API at the moment, thus this polyfill.

## Security note

If some library needs `window.crypto`, the general recommendation is to not use that library in environments where this API is missing. Use a polyfill only if really necessary.

This polyfill uses ChaCha20 stream cipher to obtain pseudo-random numbers, which seems to be the industry standard now. But this polyfill has not been reviewed by a cryptography specialist, so use it as your own risk. And feedback is welcome.

For the lack of anything else so far, this generator was tested with the Dieharder suite. Read its man page to decide what it's worth. The results of the test are below on this page.

## Usage

Either import it in the source as a side effect:

```js
import "window-crypto";
```

or simply include as a script:

```html
<script src="https://unpkg.com/window-crypto"></script>
```

## Dieharder test

Below is the output of the dieharder test for this polyfill. To run the test, call `yarn run dieharder`.

For comparison the test has an alternative "silly" generator based on Math.random. To run the test with that generator, define the `SILLY` variable (for example, run `SILLY=1 yarn run dieharder`).

```
#=============================================================================#
#            dieharder version 3.31.1 Copyright 2003 Robert G. Brown          #
#=============================================================================#
   rng_name    |rands/second|   Seed   |
stdin_input_raw|  5.15e+06  |2676942317|
#=============================================================================#
        test_name   |ntup| tsamples |psamples|  p-value |Assessment
#=============================================================================#
   diehard_birthdays|   0|       100|     100|0.11286983|  PASSED
      diehard_operm5|   0|   1000000|     100|0.64251017|  PASSED
  diehard_rank_32x32|   0|     40000|     100|0.59326459|  PASSED
    diehard_rank_6x8|   0|    100000|     100|0.63397051|  PASSED
   diehard_bitstream|   0|   2097152|     100|0.19579009|  PASSED
        diehard_opso|   0|   2097152|     100|0.86910032|  PASSED
        diehard_oqso|   0|   2097152|     100|0.67464303|  PASSED
         diehard_dna|   0|   2097152|     100|0.49934594|  PASSED
diehard_count_1s_str|   0|    256000|     100|0.36921974|  PASSED
diehard_count_1s_byt|   0|    256000|     100|0.27721349|  PASSED
 diehard_parking_lot|   0|     12000|     100|0.63285114|  PASSED
    diehard_2dsphere|   2|      8000|     100|0.19947870|  PASSED
    diehard_3dsphere|   3|      4000|     100|0.56098232|  PASSED
     diehard_squeeze|   0|    100000|     100|0.12409929|  PASSED
        diehard_sums|   0|       100|     100|0.03170372|  PASSED
        diehard_runs|   0|    100000|     100|0.51819923|  PASSED
        diehard_runs|   0|    100000|     100|0.58622510|  PASSED
       diehard_craps|   0|    200000|     100|0.61161595|  PASSED
       diehard_craps|   0|    200000|     100|0.69774240|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.26175739|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.66363744|  PASSED
         sts_monobit|   1|    100000|     100|0.09174816|  PASSED
            sts_runs|   2|    100000|     100|0.93853546|  PASSED
          sts_serial|   1|    100000|     100|0.40588407|  PASSED
          sts_serial|   2|    100000|     100|0.28638704|  PASSED
          sts_serial|   3|    100000|     100|0.32605540|  PASSED
          sts_serial|   3|    100000|     100|0.77594721|  PASSED
          sts_serial|   4|    100000|     100|0.68066552|  PASSED
          sts_serial|   4|    100000|     100|0.87138591|  PASSED
          sts_serial|   5|    100000|     100|0.95934767|  PASSED
          sts_serial|   5|    100000|     100|0.48898618|  PASSED
          sts_serial|   6|    100000|     100|0.49290158|  PASSED
          sts_serial|   6|    100000|     100|0.89587085|  PASSED
          sts_serial|   7|    100000|     100|0.22464842|  PASSED
          sts_serial|   7|    100000|     100|0.13594484|  PASSED
          sts_serial|   8|    100000|     100|0.98188063|  PASSED
          sts_serial|   8|    100000|     100|0.93167927|  PASSED
          sts_serial|   9|    100000|     100|0.41182155|  PASSED
          sts_serial|   9|    100000|     100|0.52454287|  PASSED
          sts_serial|  10|    100000|     100|0.97997121|  PASSED
          sts_serial|  10|    100000|     100|0.76006365|  PASSED
          sts_serial|  11|    100000|     100|0.11869395|  PASSED
          sts_serial|  11|    100000|     100|0.36634544|  PASSED
          sts_serial|  12|    100000|     100|0.50049554|  PASSED
          sts_serial|  12|    100000|     100|0.24534745|  PASSED
          sts_serial|  13|    100000|     100|0.81680310|  PASSED
          sts_serial|  13|    100000|     100|0.87310308|  PASSED
          sts_serial|  14|    100000|     100|0.67097595|  PASSED
          sts_serial|  14|    100000|     100|0.46831145|  PASSED
          sts_serial|  15|    100000|     100|0.63252790|  PASSED
          sts_serial|  15|    100000|     100|0.86075883|  PASSED
          sts_serial|  16|    100000|     100|0.78780244|  PASSED
          sts_serial|  16|    100000|     100|0.35648010|  PASSED
         rgb_bitdist|   1|    100000|     100|0.38142986|  PASSED
         rgb_bitdist|   2|    100000|     100|0.89778380|  PASSED
         rgb_bitdist|   3|    100000|     100|0.96901690|  PASSED
         rgb_bitdist|   4|    100000|     100|0.93874137|  PASSED
         rgb_bitdist|   5|    100000|     100|0.90597584|  PASSED
         rgb_bitdist|   6|    100000|     100|0.97551321|  PASSED
         rgb_bitdist|   7|    100000|     100|0.25468218|  PASSED
         rgb_bitdist|   8|    100000|     100|0.97492050|  PASSED
         rgb_bitdist|   9|    100000|     100|0.38524501|  PASSED
         rgb_bitdist|  10|    100000|     100|0.44063253|  PASSED
         rgb_bitdist|  11|    100000|     100|0.54635035|  PASSED
         rgb_bitdist|  12|    100000|     100|0.14377146|  PASSED
rgb_minimum_distance|   2|     10000|    1000|0.52364405|  PASSED
rgb_minimum_distance|   3|     10000|    1000|0.41345333|  PASSED
rgb_minimum_distance|   4|     10000|    1000|0.27659281|  PASSED
rgb_minimum_distance|   5|     10000|    1000|0.86144569|  PASSED
    rgb_permutations|   2|    100000|     100|0.11689066|  PASSED
    rgb_permutations|   3|    100000|     100|0.91876926|  PASSED
    rgb_permutations|   4|    100000|     100|0.08052014|  PASSED
    rgb_permutations|   5|    100000|     100|0.58390664|  PASSED
      rgb_lagged_sum|   0|   1000000|     100|0.21709182|  PASSED
      rgb_lagged_sum|   1|   1000000|     100|0.50963744|  PASSED
      rgb_lagged_sum|   2|   1000000|     100|0.32871356|  PASSED
      rgb_lagged_sum|   3|   1000000|     100|0.96747604|  PASSED
      rgb_lagged_sum|   4|   1000000|     100|0.42236501|  PASSED
      rgb_lagged_sum|   5|   1000000|     100|0.00850750|  PASSED
      rgb_lagged_sum|   6|   1000000|     100|0.20214866|  PASSED
      rgb_lagged_sum|   7|   1000000|     100|0.95562548|  PASSED
      rgb_lagged_sum|   8|   1000000|     100|0.71953032|  PASSED
      rgb_lagged_sum|   9|   1000000|     100|0.76027377|  PASSED
      rgb_lagged_sum|  10|   1000000|     100|0.24613375|  PASSED
      rgb_lagged_sum|  11|   1000000|     100|0.06911765|  PASSED
      rgb_lagged_sum|  12|   1000000|     100|0.81354001|  PASSED
      rgb_lagged_sum|  13|   1000000|     100|0.06035357|  PASSED
      rgb_lagged_sum|  14|   1000000|     100|0.60267011|  PASSED
      rgb_lagged_sum|  15|   1000000|     100|0.60048406|  PASSED
      rgb_lagged_sum|  16|   1000000|     100|0.62429855|  PASSED
      rgb_lagged_sum|  17|   1000000|     100|0.41488818|  PASSED
      rgb_lagged_sum|  18|   1000000|     100|0.08157201|  PASSED
      rgb_lagged_sum|  19|   1000000|     100|0.85462879|  PASSED
      rgb_lagged_sum|  20|   1000000|     100|0.99999440|   WEAK
      rgb_lagged_sum|  21|   1000000|     100|0.66276067|  PASSED
      rgb_lagged_sum|  22|   1000000|     100|0.00815589|  PASSED
      rgb_lagged_sum|  23|   1000000|     100|0.60600236|  PASSED
      rgb_lagged_sum|  24|   1000000|     100|0.14925169|  PASSED
      rgb_lagged_sum|  25|   1000000|     100|0.48610548|  PASSED
      rgb_lagged_sum|  26|   1000000|     100|0.01111350|  PASSED
      rgb_lagged_sum|  27|   1000000|     100|0.28775100|  PASSED
      rgb_lagged_sum|  28|   1000000|     100|0.39199598|  PASSED
      rgb_lagged_sum|  29|   1000000|     100|0.65837097|  PASSED
      rgb_lagged_sum|  30|   1000000|     100|0.93427530|  PASSED
      rgb_lagged_sum|  31|   1000000|     100|0.52155253|  PASSED
      rgb_lagged_sum|  32|   1000000|     100|0.92805026|  PASSED
     rgb_kstest_test|   0|     10000|    1000|0.27767761|  PASSED
     dab_bytedistrib|   0|  51200000|       1|0.49630084|  PASSED
             dab_dct| 256|     50000|       1|0.45062598|  PASSED
Preparing to run test 207.  ntuple = 0
        dab_filltree|  32|  15000000|       1|0.60622718|  PASSED
        dab_filltree|  32|  15000000|       1|0.70054702|  PASSED
Preparing to run test 208.  ntuple = 0
       dab_filltree2|   0|   5000000|       1|0.08831021|  PASSED
       dab_filltree2|   1|   5000000|       1|0.40168457|  PASSED
Preparing to run test 209.  ntuple = 0
        dab_monobit2|  12|  65000000|       1|0.72722186|  PASSED
```
